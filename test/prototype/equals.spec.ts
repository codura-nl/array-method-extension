export * from '../../src/prototype';

class ComparableItem {
  constructor(readonly item: string) {
  }

  equals(comparableItem: ComparableItem) {
    return this.item === comparableItem.item;
  }
}

class NotComparableItem {
  constructor(readonly item: string) {
  }
}

describe('equals', () => {
  test('empty and null', () => {
    const comparableItems1 = [];

    expect(comparableItems1.equals(null)).toBe(true);
  });

  test('same in order', () => {
    const comparableItems1 = [new ComparableItem('a'), new ComparableItem('b')];
    const comparableItems2 = [new ComparableItem('a'), new ComparableItem('b')];

    expect(comparableItems1.equals(comparableItems2)).toBe(true);
  });

  test('same different order', () => {
    const comparableItems1 = [new ComparableItem('a'), new ComparableItem('b')];
    const comparableItems2 = [new ComparableItem('b'), new ComparableItem('a')];

    expect(comparableItems1.equals(comparableItems2)).toBe(true);
  });

  test('same with one more', () => {
    const comparableItems1 = [new ComparableItem('a'), new ComparableItem('b')];
    const comparableItems2 = [new ComparableItem('b'), new ComparableItem('a'), new ComparableItem('c')];

    expect(comparableItems1.equals(comparableItems2)).toBe(false);
  });

  test('same with one less', () => {
    const comparableItems1 = [new ComparableItem('a'), new ComparableItem('b'), new ComparableItem('c')];
    const comparableItems2 = [new ComparableItem('b'), new ComparableItem('a')];

    expect(comparableItems1.equals(comparableItems2)).toBe(false);
  });

  test('different', () => {
    const comparableItems1 = [new ComparableItem('a'), new ComparableItem('b')];
    const comparableItems2 = [new ComparableItem('c'), new ComparableItem('d')];

    expect(comparableItems1.equals(comparableItems2)).toBe(false);
  });

  test('not comparable same values', () => {
    const comparableItems1 = [new NotComparableItem('a'), new ComparableItem('b')];
    const comparableItems2 = [new ComparableItem('a'), new ComparableItem('b')];

    expect(() => comparableItems1.equals(comparableItems2)).toThrow('Cannot compare non-comparable item: {"item":"a"}');
  });
});
