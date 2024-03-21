import React, { useMemo } from 'react'
import { useCountDown } from 'ahooks'
import { Options } from 'ahooks/lib/useCountDown'
import { formatStr } from '@/utils'

interface iProps extends Options {
  className?: string
  format: string
  isPadzero?: boolean // 是否補0
  leftTime: number
}

function Countdown({ className, format, isPadzero = true, leftTime, onEnd }: iProps) {
  const [_, formattedRes] = useCountDown({
    leftTime,
    onEnd,
  })

  // 補0判斷
  const newFormatRes = useMemo(() => {
    if (isPadzero) {
      const { days, hours, minutes, seconds, milliseconds } = formattedRes
      return {
        days,
        hours: isPadzero && hours <= 9 ? `0${hours}` : hours,
        minutes: isPadzero && minutes <= 9 ? `0${minutes}` : minutes,
        seconds: isPadzero && seconds <= 9 ? `0${seconds}` : seconds,
        milliseconds,
      }
    } else {
      return formattedRes
    }
  }, [formattedRes, isPadzero])

  return (
    <span suppressHydrationWarning className={className}>
      {formatStr(newFormatRes, format)}
    </span>
  )
}

export default Countdown
