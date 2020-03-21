import telComb from '../../src/Array/电话号码组合'

test('telComb:23', () => {
  expect(telComb('23'))
    .toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
})