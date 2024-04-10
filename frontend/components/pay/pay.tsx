import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { OrderDTO, unifiedOrder } from '@/api'
import Btn from '@/components/btn'
import { useRequest } from 'ahooks'

interface iProps {
  onSuccess: (_: OrderDTO) => void
}

// 创建订单
export function Pay({ onSuccess }: iProps) {
  const { t } = useTranslation()
  const { data, loading, run } = useRequest(unifiedOrder, {
    manual: true,
  })

  useEffect(() => {
    if (data?.success) {
      onSuccess && onSuccess(data.data)
    }
  }, [data, onSuccess])

  return (
    <div className="max-md:max-w-full mx-auto my-28 max-md:my-0 max-md:px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-[280px] h-[171px] max-md:w-[240px] max-md:h-[148px] my-10">
          <Image className="mx-auto" src="/images/cashier.png" alt="cashier" fill />
        </div>
        <Btn
          className="min-w-56"
          type="primary"
          size="large"
          loading={loading}
          onClick={() => run()}
        >
          {t('submit')}
        </Btn>
      </div>
    </div>
  )
}
