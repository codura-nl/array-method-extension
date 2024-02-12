export * from '../../src/prototype';

class AddableItem {
  constructor(readonly item: number) {
  }

  add(addableItem: AddableItem) {
    return new AddableItem(this.item + addableItem.item);
  }
}

class NotAddableItem {
  constructor(readonly item: number) {
  }
}

describe('sum', () => {
  test('empty and null', () => {
    const addableItems = [new AddableItem(null), null];

    expect(addableItems.sum(new AddableItem(0))).toEqual(new AddableItem(0));
  });

  test('same in order', () => {
    const addableItems = [new AddableItem(4), new AddableItem(9.567)];

    expect(addableItems.sum(new AddableItem(0))).toEqual(new AddableItem(13.567));
  });

  test('not addable same values', () => {
    const addableItems = [new NotAddableItem(2), new AddableItem(2)];

    expect(() => addableItems.sum(new AddableItem(0))).toThrow('Cannot sum non-addable item: {"item":2}');
  });
});
