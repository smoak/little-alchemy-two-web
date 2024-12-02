import { getItemByName, getItemNames, getItems } from './item.js';

describe('item', () => {
  describe('.getItems', () => {
    let result: ReturnType<typeof getItems>;

    beforeEach(() => {
      result = getItems();
    });

    it('returns the expected results', () => {
      expect(result).toMatchSnapshot();
    });
  });

  describe('.getItemByName', () => {
    let result: ReturnType<typeof getItemByName>;

    describe('when the item does not exist in the database', () => {
      beforeEach(() => {
        result = getItemByName('doesntexist');
      });

      it('should be undefined', () => {
        expect(result).toBeUndefined();
      });
    });
  });

  describe('.getItemNames', () => {
    let result: ReturnType<typeof getItemNames>;

    beforeEach(() => {
      result = getItemNames();
    });

    it('returns the expected result', () => {
      expect(result).toMatchSnapshot();
    });
  });
});
