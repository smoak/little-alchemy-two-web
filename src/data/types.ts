export type Item = {
  readonly name: string;
  readonly myths: boolean;
  readonly creates: ItemCombination[];
  readonly combinations: ItemCombination[];
  readonly imageUrl: string;
  readonly displayName: string;
};

export type ItemCombination = {
  readonly source: string;
  readonly target: string;
};
