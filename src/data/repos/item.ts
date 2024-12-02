import Fuse, { IFuseOptions } from 'fuse.js';

import { DatabaseItem, getItemByName, getItemNames, getItems } from '../fetchers/item';
import type { Item, ItemCombination } from '../types';

const fromCombinations = (combinations: DatabaseItem['combinations']): ItemCombination[] =>
  combinations.map((combo) => ({ source: combo[0], target: combo[1] }));

const fromItemWithName = (name: string, item: DatabaseItem): Item => ({
  name,
  imageUrl: item.image_url,
  myths: item.myths,
  creates: item.makes,
  combinations: fromCombinations(item.combinations),
});

type FindById = (id: string) => Promise<Item>;
export const findById: FindById = async (id) => {
  const item = await getItemByName(id);

  if (!item) {
    throw new Error(`Could not find item with id: ${id}`);
  }

  return fromItemWithName(id, item);
};

type FindAll = () => Promise<Item[]>;
export const findAll: FindAll = async () => {
  const items = await getItems();

  return Object.keys(items).map<Item>((itemName) => {
    const item = items[itemName];
    return fromItemWithName(itemName, item);
  });
};

type Search = (query: string) => Promise<Item[]>;
export const search: Search = async (query) => {
  const items = await getItemNames();
  const options: IFuseOptions<string> = {
    minMatchCharLength: 2,
    threshold: 1,
  };
  const fuse = new Fuse(items, options);
  const results = fuse.search(query);
  return Promise.all(results.map((result) => findById(result.item)));
};
