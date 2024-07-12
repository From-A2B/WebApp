import { getMiddleRank, isLessThan } from '~/src/utils/getTheMiddleRank';

describe('isLessThan should return true if upRank is less than downRank', () => {
  it.each([
    ['abc', 'def'],
    ['123', '456'],
    ['!@#', '$%^'],
  ])('up %s is not less than down : %s', (up, down) => {
    expect(isLessThan(up, down)).toBe(true);
  });
});

describe('isLessThan should return false if upRank is not less than downRank', () => {
  it.each([
    ['def', 'abc'],
    ['456', '123'],
    ['$%^', '!@#'],
  ])('up %s is not less than down : %s', (up, down) => {
    expect(isLessThan(up, down)).toBe(false);
  });
});

describe('getMiddleRank should return the middle rank between upRank and downRank', () => {
  it.each([
    ['abc', 'def', 'bcd'],
    ['123', '456', '234'],
    ['!@#', '$%^', '"2@'],
  ])('if up is: %s and down is: %s rank is : %s', (up, down, expectRank) => {
    const rank = getMiddleRank(up, down);

    expect(rank).toBe(expectRank);
  });
});

it('getMiddleRank should return a string of middle characters if both ranks are missing', () => {
  expect(getMiddleRank()).toBe('O'.repeat(94));
});

describe('getMiddleRank should return a possible downRank if only upRank is provided', () => {
  it.each([
    ['abc', undefined, 'bcd'],
    ['123', undefined, '234'],
    ['!@#', undefined, '"A$'],
  ])('if up is: %s and down is: %s rank is : %s', (up, down, expectRank) => {
    const rank = getMiddleRank(up, down);

    expect(rank).toBe(expectRank);
  });
});

describe('getMiddleRank should return a possible upRank if only downRank is provided', () => {
  it.each([
    [undefined, 'def', 'cde'],
    [undefined, '456', '345'],
    [undefined, '$%^', '#$]'],
  ])('if up is: %s and down is: %s rank is : %s', (up, down, expectRank) => {
    const rank = getMiddleRank(up, down);

    expect(rank).toBe(expectRank);
  });
});
