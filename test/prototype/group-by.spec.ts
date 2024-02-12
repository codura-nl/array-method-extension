export * from '../../src/prototype';

class GroupableItem {
  constructor(readonly id: string, readonly value: number) {
  }
}

describe('groupBy', () => {
  test('by id', () => {
    const groupableItems = [new GroupableItem('1', 4), new GroupableItem('2', 9.567), new GroupableItem('1', 3.25)];

    expect(groupableItems.groupBy(addableItem => addableItem.id)).toEqual(new Map([
      ['1', [new GroupableItem('1', 4), new GroupableItem('1', 3.25)]],
      ['2', [new GroupableItem('2', 9.567)]],
    ]));
  });
});
