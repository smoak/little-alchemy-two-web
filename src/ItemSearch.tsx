import graphql from 'babel-plugin-relay/macro';
import { Box, TextInput } from 'grommet';
import { Search } from 'grommet-icons';
import React, { FC, useCallback, useRef, useState, unstable_useTransition as useTransition } from 'react';
import { useLazyLoadQuery, useRefetchableFragment } from 'react-relay/hooks';
import { useHistory } from 'react-router-dom';

import { ItemSearchQuery } from './__generated__/ItemSearchQuery.graphql';
import { ItemSearchRefetchQuery } from './__generated__/ItemSearchRefetchQuery.graphql';
import { ItemSearch_search, ItemSearch_search$key } from './__generated__/ItemSearch_search.graphql';
import { notEmpty } from './data/array';

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

export const ItemSearch: FC = () => {
  const [startTransition] = useTransition();
  const history = useHistory();
  const response = useLazyLoadQuery<ItemSearchQuery>(query, { query: '' });
  const [data, refetch] = useRefetchableFragment<ItemSearchRefetchQuery, ItemSearch_search$key>(fragment, response);
  const [value, setValue] = useState('');
  const onChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      const { value: newValue } = event.target;
      setValue(newValue);

      if (newValue.trim()) {
        startTransition(() => {
          refetch({ query: newValue });
        });
      }
    },
    [refetch, startTransition]
  );
  const onSelect = useCallback(
    ({ suggestion }) => {
      history.push(`/item/${suggestion}`);
    },
    [history]
  );
  const suggestions = getSuggestions(data, value);
  const hasSuggestions = suggestions.length > 0;
  const boxRef = useRef<HTMLDivElement>(null);
  const boxElevation = hasSuggestions ? 'medium' : undefined;
  const boxStyle = hasSuggestions ? { borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px' } : undefined;

  return (
    <Box fill align="center" pad={{ top: 'large' }}>
      <Box
        width="large"
        ref={boxRef}
        direction="row"
        align="center"
        pad={{ horizontal: 'small', vertical: 'xsmall' }}
        round="small"
        elevation={boxElevation}
        border={{
          side: 'all',
          color: hasSuggestions ? 'transparent' : 'border',
        }}
        style={boxStyle}
      >
        <Search color="brand" />
        <TextInput
          type="search"
          dropTarget={boxRef.current ? boxRef.current : undefined}
          plain
          placeholder="Search for an item"
          value={value}
          onChange={onChange}
          suggestions={suggestions}
          onSelect={onSelect}
        />
      </Box>
    </Box>
  );
};
