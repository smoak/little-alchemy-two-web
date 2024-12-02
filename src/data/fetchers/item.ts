const database = import('../db.json');

// type DatabaseSchema = {
//   readonly items: DatabaseItems;
// };

export type DatabaseItem = {
  readonly myths: boolean;
  readonly makes: { source: string; target: string }[];
  readonly combinations: string[][];
  readonly image_url: string;
};

type DatabaseItems = Record<string, DatabaseItem>;

type GetItems = () => Promise<DatabaseItems>;
export const getItems: GetItems = async () => (await database).items;

type GetItemByName = (name: string) => Promise<DatabaseItem | undefined>;
export const getItemByName: GetItemByName = async (name) => {
  const items = await getItems();
  return items[name];
};

export const getItemNames = async () => {
  const items = await getItems();
  return Object.keys(items);
};
