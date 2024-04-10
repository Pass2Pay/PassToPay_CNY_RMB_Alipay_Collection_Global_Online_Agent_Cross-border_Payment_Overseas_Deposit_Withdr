import BigNumber from 'bignumber.js'

/** 四舍五入转化为指定小数位数，不足补0
 * @param {string | number} num 表示需要四舍五入的小数
 * @param {number} s 表示需要保留几位小数
 * @return {string} 数字约位后的结果
 */
export function toFixed(num: BigNumber.Value, s = 2) {
  return BigNumber(num).toFixed(s)
}

/**
 * 获取数字小数位长度
 * @param {string | number} num 数字
 * @return {number} 小数位长度
 */
export function getDecimalNum(num: BigNumber.Value) {
  return BigNumber(num).dp()
}

/**
 * 加法
 * @param {string | number} num1 数字
 * @param {string | number} num2 数字
 * @return {string} 计算后的结果
 */
export function plus(num1: BigNumber.Value, num2: BigNumber.Value) {
  num1 = num1 || 0
  num2 = num2 || 0
  return BigNumber(num1).plus(num2).toString()
}

/**
 * 减法
 * @param {string | number} num1 数字
 * @param {string | number} num2 数字
 * @return {string} 计算后的结果
 */
export function minus(num1: BigNumber.Value, num2: BigNumber.Value) {
  num1 = num1 || 0
  num2 = num2 || 0
  return BigNumber(num1).minus(num2).toString()
}

/**
 * 除法
 * @param {string | number} num1 数字
 * @param {string | number} num2 数字
 * @return {string} 计算后的结果
 */
export function divide(num1: BigNumber.Value, num2: BigNumber.Value) {
  num1 = num1 || 0
  num2 = num2 || 1
  return BigNumber(num1).div(num2).toString()
}

/**
 * 除法
 * @param {string | number} num1 数字
 * @param {string | number} num2 数字
 * @return {string} 计算后的结果
 */
export function div(num1: BigNumber.Value, num2: BigNumber.Value) {
  num1 = num1 || 0
  num2 = num2 || 1
  return BigNumber(num1).div(num2).toString()
}

/**
 * 乘法
 * @param {string | number} num1 数字
 * @param {string | number} num2 数字
 * @return {string} 计算后的结果
 */
export function mul(num1: BigNumber.Value, num2: BigNumber.Value) {
  num1 = num1 || 0
  num2 = num2 || 0
  return BigNumber(num1).multipliedBy(num2).toString()
}

/**
 * 幂
 * @param {string | number} num1 数字
 * @param {string | number} num2 数字
 * @return {string} 计算后的结果
 */
export function pow(num1: BigNumber.Value, num2: BigNumber.Value) {
  num1 = num1 || 0
  num2 = num2 || 0
  return BigNumber(num1).pow(num2).toString()
}

/**
 * 数字比较: 大于
 * @param {string | number} num1 数字
 * @param {string | number} num2 数字
 * @return {boolean} 比较后的结果
 */
export function gt(num1: BigNumber.Value, num2: BigNumber.Value) {
  return BigNumber(num1).gt(num2)
}

/**
 * 数字比较: 大于等于
 * @param {string | number} num1 数字
 * @param {string | number} num2 数字
 * @return {boolean} 比较后的结果
 */
export function gte(num1: BigNumber.Value, num2: BigNumber.Value) {
  return BigNumber(num1).gte(num2)
}

/**
 * 数字比较: 小于
 * @param {string | number} num1 数字
 * @param {string | number} num2 数字
 * @return {boolean} 比较后的结果
 */
export function lt(num1: BigNumber.Value, num2: BigNumber.Value) {
  return BigNumber(num1).lt(num2)
}

/**
 * 数字比较: 小于等于
 * @param {string | number} num1 数字
 * @param {string | number} num2 数字
 * @return {boolean} 比较后的结果
 */
export function lte(num1: BigNumber.Value, num2: BigNumber.Value) {
  return BigNumber(num1).lte(num2)
}

/**
 * 数字比较: 等于
 * @param {string | number} num1 数字
 * @param {string | number} num2 数字
 * @return {boolean} 比较后的结果
 */
export function eq(num1: BigNumber.Value, num2: BigNumber.Value) {
  return BigNumber(num1).eq(num2)
}

/**
 * 比较两个数字值是否相等，包含null, undefined,0,'',false类型
 * @param {string | number} a 数字
 * @param {string | number} b 数字
 * @return {boolean} 比较后的结果
 */
export function equalTo(a: BigNumber.Value, b: BigNumber.Value) {
  const aBool = !!a
  const bBool = !!b
  if (aBool === false && aBool === bBool) {
    return true
  } else {
    return BigNumber(a).eq(b)
  }
}

/**
 * 移位比 eg: shiftedBy(num1:  BigNumber.Value, num2: BigNumber.Value)
 * @param {string | number} num1 要处理的数字
 * @param {string | number} num2 移位为小数点，即10的幂，如果n为负则向左移位，如果n为正则向右移位。
 */
export function shiftedBy(num1: BigNumber.Value, num2: number) {
  if (!num1 || !num2) return num1
  return BigNumber(num1).shiftedBy(num2).toFixed(Math.abs(num2))
}

/**
 * 绝对值
 * @param {string | number} num1 数字
 * @return {string} 结果
 */
export function abs(num1: BigNumber.Value) {
  return BigNumber(num1).abs().toString()
}

/**
 * 金额格式化显示
 * @param {string | number} num 数字
 * @param {number} decimals 小数位数
 * @return {string} 结果
 */
export function formatAmount(num: any, decimals = 2) {
  let result = ''
  if (isNaN(num)) {
    result = num
  } else if (num >= 1000000000000000000000000) {
    // 10^24  Y
    num = toFixed(num / 1000000000000000000000000, decimals)
    result = num + 'Y'
  } else if (num >= 1000000000000000000000 && num < 1000000000000000000000000) {
    // 10^21  Z
    num = toFixed(num / 1000000000000000000000, decimals)
    result = num + 'Z'
  } else if (num >= 1000000000000000000 && num < 1000000000000000000000) {
    // 10^18  E
    num = toFixed(num / 1000000000000000000, decimals)
    result = num + 'E'
  } else if (num >= 1000000000000000 && num < 1000000000000000000) {
    // 10^15  P
    num = toFixed(num / 1000000000000000, decimals)
    result = num + 'P'
  } else if (num >= 1000000000000 && num < 1000000000000000) {
    // 10^12  T
    num = toFixed(num / 1000000000000, decimals)
    result = num + 'T'
  } else if (num >= 1000000000 && num < 1000000000000) {
    num = toFixed(num / 1000000000, decimals)
    result = num + 'B'
  } else if (num >= 1000000 && num < 1000000000) {
    num = toFixed(num / 1000000, decimals)
    result = num + 'M'
  } else if (num >= 1000) {
    num = toFixed(num / 1000, decimals)
    result = num + 'K'
  } else {
    result = toFixed(num, decimals)
  }
  return result
}

/**
 * 数字格式化显示，千分位
 * @param {string | number} num 数字
 * @param {number} digits 小数位数 digits=-1时不处理小数位
 * @return {string} 结果
 */
export function thousandsNumber(num: number | string, digits = 2) {
  if (isNaN(Number(num))) {
    return `${num || '-'}`
  }
  const strNumber = digits == -1 ? String(num) : toFixed(num, digits)
  let n = Math.abs(parseFloat(strNumber)) // 取绝对值格式化
  let r = ''
  let temp
  let mod
  do {
    mod = n % 1000
    n = n / 1000
    temp = ~~mod
    r = (n >= 1 ? `${temp}`.padStart(3, '0') : temp) + (r ? ',' + r : '')
  } while (n >= 1)
  const index = strNumber.indexOf('.')
  // 拼接小数部分
  if (index >= 0) {
    r += strNumber.substring(index)
  }
  // 负数处理
  if (Number(num) < 0) {
    r = '-' + r
  }
  return r
}

/**
 * 格式化收入支出金额，小于0显示负号，大于0显示+号
 * @param {string | number} num 数字
 * @param {number} digits 小数位数 digits=-1时不处理小数位
 * @return {string} 结果
 */
export function formatIncome(num: number | string, digits = -1) {
  if (Number(num) < 0) {
    return `- ${thousandsNumber(abs(num), digits)}`
  } else {
    return `+ ${thousandsNumber(num, digits)}`
  }
}

/**
 * 数字小数约位处理 (可选择四舍五入或向上、向下处理方式)
 * 默认展示两位小数，超过两位小数的有多少展示多少，超过8位截断
 * @param { string | number } num 约位的数字
 * @param { number } dp 小数位
 * @param { number } maxDp 最大小数位
 * @param { number } rm 4: 四舍五入 1: 向下取整 0: 向上取整
 * @return { string } 结果
 */
export function toFixedExtend(num: string | number, dp = 2, maxDp = 8, rm = 1) {
  if (isNaN(Number(num))) return ''
  const str = BigNumber(num).toFixed(maxDp, rm as any)
  const parseStr = BigNumber(str).toString() // 去掉后面的0
  const parseStrDp = BigNumber(parseStr).dp()
  return parseStrDp === 0 ? toFixed(parseStr, dp) : parseStr
}

/**
 * 指定小数位数
 * @param { string | number } 当前值
 * @param { number } dp 小数位
 * @return { string } 结果
 */
export function toDecimalPlaces(num: string, dp = 2) {
  let value = num.replace(/[^\d.]/g, '')
  const regex = new RegExp('(\\.\\d{' + dp + '})\\d*$')
  value = value.replace(regex, '$1')
  // 确保只有一个小数点
  const dotCount = (value.match(/\./g) || []).length
  if (dotCount > 1) {
    value = value.slice(0, value.lastIndexOf('.'))
  }
  return value
}

// 科学计算法转 string
export function toNonExponential(num: number) {
  num = parseFloat(`${num}`)
  const m = num.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/)
  // @ts-ignore 待处理
  return num.toFixed(Math.max(0, (m[1] || '').length - m[2]))
}

/* 保留小数位 不四舍五入 */
export function retainDecimal(num: string, decimal = 2) {
  num = num.toString()
  const index = num.indexOf('.')
  if (index !== -1) {
    num = num.substring(0, decimal + index + 1)
  } else {
    num = num.substring(0)
  }
  return parseFloat(num).toFixed(decimal)
}
