import graphql from 'babel-plugin-relay/macro';
import { Box, Spinner, TextInput } from 'grommet';
import { Search } from 'grommet-icons';
import React, { FC, useRef, useState, useTransition } from 'react';
import { useLazyLoadQuery, useRefetchableFragment } from 'react-relay/hooks';
import { useNavigate } from 'react-router-dom';

import { notEmpty } from '../../data/array';

import { ItemSearchQuery } from './__generated__/ItemSearchQuery.graphql';
import { ItemSearchRefetchQuery } from './__generated__/ItemSearchRefetchQuery.graphql';
import { ItemSearch_search, ItemSearch_search$key } from './__generated__/ItemSearch_search.graphql';

const fragment = graphql`
  fragment ItemSearch_search on Query @refetchable(queryName: "ItemSearchRefetchQuery") {
    search(query: $query) {
      ... on ItemSearchResults {
        items(first: 5) {
          edges {
            node {
              id
              name
              myths
            }
          }
        }
      }
    }
  }
`;

const query = graphql`
  query ItemSearchQuery($query: String!) {
    ...ItemSearch_search
  }
`;

const getSuggestions = (data: ItemSearch_search, query: string) => {
  if (!data.search.items || !data.search.items.edges || query === '') {
    return [];
  }

  return data.search.items.edges.filter(notEmpty).map((e) => e.node.name);
};

const spinnerItem = [
  {
    label: (
      <Box direction="row" align="center" gap="small" pad="small">
        <Spinner />
      </Box>
    ),
  },
];

export const ItemSearch: FC = () => {
  const [isPending, startTransition] = useTransition();
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [areSuggestionsShowing, setAreSuggestionsShowing] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const response = useLazyLoadQuery<ItemSearchQuery>(query, { query: '' });
  const [data, refetch] = useRefetchableFragment<ItemSearchRefetchQuery, ItemSearch_search$key>(fragment, response);
  const onChange: React.ChangeEventHandler<HTMLInputElement> = ({ target: { value: newValue } }) => {
    setValue(newValue);
    if (newValue.trim()) {
      startTransition(() => {
        refetch({ query: newValue });
      });
    }
  };
  const onSuggestionSelect = ({ suggestion }: { suggestion: string }) => {
    navigate(`/item/${suggestion}`);
  };
  const onSuggestionsClose = () => {
    setAreSuggestionsShowing(false);
  };
  const items = getSuggestions(data, value);

  return (
    <Box
      ref={boxRef}
      width="large"
      direction="row"
      align="center"
      round="small"
      pad={{ horizontal: 'small', vertical: 'xsmall' }}
      elevation={areSuggestionsShowing ? 'medium' : undefined}
      border={{
        side: 'all',
        color: areSuggestionsShowing ? 'transparent' : 'border',
      }}
      style={areSuggestionsShowing ? { borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px' } : undefined}
    >
      <Search color="brand" />
      <TextInput
        dropTarget={boxRef.current ?? undefined}
        plain
        placeholder="Search for an item"
        value={value}
        suggestions={isPending ? spinnerItem : items}
        onChange={onChange}
        onSuggestionsClose={onSuggestionsClose}
        onSuggestionSelect={onSuggestionSelect}
      />
    </Box>
  );
};
