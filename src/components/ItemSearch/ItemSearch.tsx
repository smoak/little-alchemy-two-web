import { Box, Spinner, TextInput, TextInputProps } from 'grommet';
import { Search } from 'grommet-icons';
import React, { useRef, useState, useTransition } from 'react';
import { useNavigate } from 'react-router-dom';
import { search } from '../../data/repos/item';
import { useAsyncFn } from 'react-use';
import { Item } from '../../data/types';

const spinnerItem = [
  {
    label: (
      <Box direction="row" align="center" gap="small" pad="small">
        <Spinner />
      </Box>
    ),
  },
];

type SuggestedItemProps = {
  readonly item: Item;
};
const SuggestedItem = ({ item }: SuggestedItemProps) => {
  return (
    <Box direction="row" align="center" gap="small" pad="small">
      {item.displayName}
    </Box>
  );
};

type Suggestions = TextInputProps['suggestions'];

export const ItemSearch = () => {
  const [suggestions, setSuggestions] = useState<Suggestions>([]);
  const [state, newSearch] = useAsyncFn(async (query: string) => {
    const items = await search(query);
    setSuggestions(items.map((i) => ({ label: <SuggestedItem item={i} />, value: i.name })));
  });
  const [isPending, startTransition] = useTransition();
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const areSuggestionsShowing = state.value != null;
  const boxRef = useRef<HTMLDivElement>(null);
  const onChange: React.ChangeEventHandler<HTMLInputElement> = ({ target: { value: newValue } }) => {
    setValue(newValue);
    if (newValue.trim()) {
      startTransition(() => {
        newSearch(newValue);
      });
    } else {
      setSuggestions([]);
    }
  };
  const onSuggestionSelect = ({ suggestion }: { suggestion: { value: string } }) => {
    navigate(`/item/${suggestion.value}`);
  };

  return (
    <Box
      background="white"
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
        suggestions={isPending ? spinnerItem : suggestions}
        onChange={onChange}
        onSuggestionSelect={onSuggestionSelect}
      />
    </Box>
  );
};
