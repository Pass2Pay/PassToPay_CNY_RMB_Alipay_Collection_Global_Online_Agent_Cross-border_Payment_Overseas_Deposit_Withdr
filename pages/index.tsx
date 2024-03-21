import { useState } from 'react'
import { OrderDTO } from '@/api'
import BasicLayout from '@/layout/basicLayout'
import { Pay, Order } from '@/components/pay'

export default function App() {
  const [payInfo, setPayInfo] = useState<OrderDTO | null>(null)

  const handleSuccess = (data: OrderDTO) => {
    setPayInfo(data)
  }

  const handleConfirm = () => {
    setPayInfo(null)
  }

  return (
    <BasicLayout>
      {payInfo?.payOrderId ? (
        <Order payInfo={payInfo} onConfirm={handleConfirm} />
      ) : (
        <Pay onSuccess={handleSuccess} />
      )}
    </BasicLayout>
  )
}
