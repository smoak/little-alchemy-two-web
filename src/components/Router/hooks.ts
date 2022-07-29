import { useParams } from 'react-router-dom';

import { ItemParams } from './types';

type UseItemParams = () => ItemParams;
export const useItemParams: UseItemParams = () => {
  const { name } = useParams<'name'>();

  if (!name) {
    throw new Error('useItemParams used in an unexpected route');
  }

  return { name };
};
