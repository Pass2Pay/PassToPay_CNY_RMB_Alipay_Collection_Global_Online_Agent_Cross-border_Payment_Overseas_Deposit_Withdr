import { useEffect, useState } from 'react'
import { isMobile } from '@/utils'

export default function useIsMobile() {
  const [ismobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(isMobile())
  }, [])
  return ismobile
}
