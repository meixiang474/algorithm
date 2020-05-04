// 在一个成对数组中找到缺失的一个元素

let arr = [1,1,2,2,3]

const searchOnly = arr => arr.reduce((prev, next) => prev ^ next)
