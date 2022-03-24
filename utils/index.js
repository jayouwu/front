// 对象转数组
export const objToArr = (arr) => {
  return Object.entries(arr).map(([value, label]) => ({label, value})) || {}
}