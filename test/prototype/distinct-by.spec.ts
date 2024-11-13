export * from '../../src/prototype';

class DistinctiveItem {
  constructor(readonly id: string, readonly value: number) {
  }
}

describe('distinctBy', () => {
  test('by id', () => {
    const distinctiveItems = [new DistinctiveItem('1', 4), new DistinctiveItem('2', 9.567), new DistinctiveItem('1', 4)];

    expect(distinctiveItems.distinctBy(distinctiveItem => distinctiveItem.id)).toEqual([
      new DistinctiveItem('1', 4),
      new DistinctiveItem('2', 9.567),
    ]);
  });
});
