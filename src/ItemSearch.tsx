import graphql from 'babel-plugin-relay/macro';
import { Box, TextInput } from 'grommet';
import { Search } from 'grommet-icons';
import React, { FC, useCallback, useRef, useState } from 'react';
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

const getSuggestions = (data: ItemSearch_search) => {
  if (!data.search.items || !data.search.items.edges) {
    return [];
  }

  return data.search.items.edges.filter(notEmpty).map((e) => e.node.name);
};

export const ItemSearch: FC = () => {
  const history = useHistory();
  const response = useLazyLoadQuery<ItemSearchQuery>(query, { query: '' });
  const [data, refetch] = useRefetchableFragment<ItemSearchRefetchQuery, ItemSearch_search$key>(fragment, response);
  const [value, setValue] = useState('');
  const [suggestionOpen, setSuggestionOpen] = useState(false);
  const onSuggestionsClose = useCallback(() => {
    setSuggestionOpen(false);
  }, [setSuggestionOpen]);
  const onSuggestionsOpen = useCallback(() => {
    setSuggestionOpen(true);
  }, [setSuggestionOpen]);
  const onChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      const { value: newValue } = event.target;
      setValue(newValue);

      if (!newValue.trim()) {
        // setSuggestions([]);
      } else {
        console.log('Searching...', newValue);
        refetch({ query: newValue });
      }
    },
    [refetch]
  );
  const onSelect = useCallback(
    ({ suggestion }) => {
      history.push(`/item/${suggestion}`);
    },
    [history]
  );
  const boxRef = useRef<HTMLDivElement>(null);
  const boxElevation = suggestionOpen ? 'medium' : undefined;
  const boxStyle = suggestionOpen ? { borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px' } : undefined;
  const suggestions = getSuggestions(data);

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
          color: suggestionOpen ? 'transparent' : 'border',
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
          onSuggestionsClose={onSuggestionsClose}
          onSuggestionsOpen={onSuggestionsOpen}
          onSelect={onSelect}
        />
      </Box>
    </Box>
  );
};
