jest.mock('../fetchers/item');

import { DatabaseItem, getItemByName, getItemNames, getItems } from '../fetchers/item';

import { findAll, findById, search } from './item';

describe('item', () => {
  const item: DatabaseItem = {
    combinations: [['item1', 'item2']],
    makes: [
      {
        source: 'item1',
        target: 'item2',
      },
    ],
    myths: false,
    image_url: 'https://picsum.photos/48',
  };

  describe('.findById', () => {
    let result: ReturnType<typeof findById>;

    describe('when the item cannot be found', () => {
      beforeEach(() => {
        (getItemByName as jest.Mock).mockReturnValue(undefined);
      });

      it('throws an error', () => {
        expect(() => findById('foo')).toThrowErrorMatchingSnapshot();
      });
    });

    describe('when the item can be found', () => {
      beforeEach(() => {
        (getItemByName as jest.Mock).mockReturnValue(item);

        result = findById('item');
      });

      it('returns the expected result', () => {
        expect(result).toMatchSnapshot();
      });
    });
  });

  describe('.findAll', () => {
    let result: ReturnType<typeof findAll>;

    describe('when there are no items', () => {
      beforeEach(() => {
        (getItems as jest.Mock).mockReturnValue([]);

        result = findAll();
      });

      it('retuns the expected result', () => {
        expect(result).toEqual([]);
      });
    });

    describe('when there are items', () => {
      beforeEach(() => {
        const items = {
          ['item']: item,
        };
        (getItems as jest.Mock).mockReturnValue(items);

        result = findAll();
      });

      it('returns the expected result', () => {
        expect(result).toMatchSnapshot();
      });
    });
  });

  describe('.search', () => {
    let result: ReturnType<typeof search>;

    describe('when the query doesnt match anything', () => {
      beforeEach(() => {
        (getItemNames as jest.Mock).mockReturnValue(['item1']);

        result = search('nomatch');
      });

      it('returns the expected result', () => {
        expect(result).toMatchSnapshot();
      });
    });

    describe('when the query matches', () => {
      beforeEach(() => {
        (getItemNames as jest.Mock).mockReturnValue(['item1']);
        (getItemByName as jest.Mock).mockReturnValue(item);

        result = search('item');
      });

      it('returns the expected result', () => {
        expect(result).toMatchSnapshot();
      });
    });
  });
});
