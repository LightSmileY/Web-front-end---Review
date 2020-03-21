import reverseWords from '../../src/String/反转字符串中每个单词的字符顺序'

test('反转字符串中每个单词的字符顺序:Let\'s take LeetCode contest', () => {
  expect(reverseWords("Let's take LeetCode contest"))
    .toBe("s'teL ekat edoCteeL tsetnoc")
})