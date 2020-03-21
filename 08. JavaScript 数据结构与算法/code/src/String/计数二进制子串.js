/* 
2.计数二进制子串

给定一个字符串 s ， 计算具有相同数量0和1的非空（连续）子字符串的数量，
并且这些子字符串中的所有0和所有1都是组合在一起的。

重复出现的子串要计算它们出现的次数

示例：
输入："00110011"
输出：6
解释：有6个子串具有相同数量的0和1："0011", "01", "1100", "10", "0011", "01"
另外，"00110011"不是有效的子串，因为所有的0和1没有组合在一起
*/

export default (str) => {
  // 建立数据结构，堆栈，保存数据
  let r = []
  // 给定任意子输入都返回第一个符合条件的子串
  let match = (str) => {
    let j = str.match(/^(0+|1+)/)[0]
    let o = (j[0] ^ 1).toString().repeat(j.length)
    let reg = new RegExp(`^(${j}${o})`)
    if (reg.test(str)) {
      return RegExp.$1
    } else {
      return ''
    }
  }
  // 通过for循环控制程序运行的流程
  for (let i = 0, len = str.length - 1; i < len; i++) {
    let sub = match(str.slice(i))
    if (sub) {
      r.push(sub)
    }
  }
  return r
}