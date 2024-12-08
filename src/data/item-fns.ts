export const displayNameFor = (itemName: string): string => capitalizeWords(itemName.replaceAll('-', ' '));

const capitalizeWords = (str: string) =>
  str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
