import { useParams } from 'react-router-dom';

import { ItemParams } from './types';

type UseItemParams = () => ItemParams;
export const useItemParams: UseItemParams = () => useParams<ItemParams>();
