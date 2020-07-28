import { Box, TextInput } from 'grommet';
import React, { FC, useCallback, useState } from 'react';

export const ItemSearch: FC = () => {
  const [value, setValue] = useState('');
  const onChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      setValue(event.target.value);
    },
    [setValue]
  );

  return (
    <Box width="medium">
      <TextInput value={value} onChange={onChange} />
    </Box>
  );
};
