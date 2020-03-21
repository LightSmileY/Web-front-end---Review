import countSubStr from '../../src/String/计数二进制子串'

test('countSubStr:00110011', () => {
  expect(countSubStr('00110011'))
    .toEqual(['0011', '01', '1100', '10', '0011', '01'])
})