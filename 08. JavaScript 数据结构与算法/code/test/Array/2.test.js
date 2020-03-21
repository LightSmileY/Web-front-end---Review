import cardGroup from '../../src/Array/卡牌分组'

test('cardGroup:[1, 2, 3, 4, 4, 3, 2, 1]', () => {
  expect(cardGroup([1, 2, 3, 4, 4, 3, 2, 1]))
    .toEqual(true)
})
test('cardGroup:[1, 1, 1, 2, 2, 2, 3, 3]', () => {
  expect(cardGroup([1, 1, 1, 2, 2, 2, 3, 3]))
    .toEqual(false)
})
test('cardGroup:[1, 1, 2, 2, 2, 2]', () => {
  expect(cardGroup([1, 1, 2, 2, 2, 2]))
    .toEqual(true)
})