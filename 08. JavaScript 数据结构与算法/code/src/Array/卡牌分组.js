// 卡牌分组
export default (arr) => {
  arr.sort((a, b) => a - b)
  let min = Number.MAX_SAFE_INTEGER // 记录最少相同个数
  let dist = [] // 目标数组
  for (let i = 0, len = arr.length, temp = []; i < len; i++) {
    temp.push(arr[i])
    for (let j = i + 1; j < len; j++) {
      if (arr[i] === arr[j]) {
        temp.push(arr[j])
      } else {
        if (temp.length < min) {
          min = temp.length
        }
        dist.push([...temp])
        temp.length = 0
        i = j
        break
      }
    }
  }
  return dist.every(item => {
    if (item.length % min === 0) {
      return true
    }
  })
}