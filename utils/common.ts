export function isMobile() {
  if (typeof window !== 'undefined') {
    return Boolean(
      window.matchMedia('(pointer:coarse)').matches ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent),
    )
  }
  return false
}

//格式化字符串
interface TemplateObject {
  [key: string]: any
}
export function formatStr(obj: TemplateObject, template: string): string {
  return template.replace(/{(.*?)}/g, (_, key) => obj[key.trim()])
}

// 解析时间戳内容 isPadzero 是否补0
export function parseMs(leftTime: number, isPadzero = true) {
  const days = Math.floor(leftTime / 86400000)
  const hours = Math.floor(leftTime / 3600000) % 24
  const minutes = Math.floor(leftTime / 60000) % 60
  const seconds = Math.floor(leftTime / 1000) % 60
  const milliseconds = Math.floor(leftTime) % 1000
  return {
    days,
    hours: isPadzero && hours <= 9 ? `0${hours}` : hours,
    minutes: isPadzero && minutes <= 9 ? `0${minutes}` : minutes,
    seconds: isPadzero && seconds <= 9 ? `0${seconds}` : seconds,
    milliseconds,
  }
}
