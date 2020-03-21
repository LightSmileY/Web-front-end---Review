/*
1.反转字符串中每个单词的字符顺序

给定一个字符串，你需要反转字符串中每个单词的字符顺序，
同时仍保留空格和单词的初始顺序

输入："Let's take LeetCode contest"
输出: "s'teL ekat edoCteeL tsetnoc"

注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格
*/

// 初写
let fn1 = str => {
  // 字符串按空格进行分隔，保存数组，数组的先后顺序就是单词的顺序
  let arr = str.split(' ')
  // 对数组遍历，然后每个元素进行反转
  let result =  arr.map(item => {
    return item.split('').reverse().join('')
  })
  return result.join(' ')
}

// 改为优雅的代码
let fn2 = str => {
  // 1.字符串按空格进行分隔，保存数组，数组的先后顺序就是单词的顺序
  // 2.对数组遍历，然后每个元素进行反转
  // 3.最后将处理后的数组转为目标字符串
  return str.split(' ').map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}

// 使用正则表达式
let fn3 = str => {
  return str.split(/\s/g).map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}

// 使用match识别单词
let fn4 = str => {
  return str.match(/[\w']+/g).map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}

export default fn4