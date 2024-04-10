import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { thousandsNumber } from '@/utils'
import { useEffect, useMemo, useRef, useState } from 'react'
import Countdown from '@/components/countdown'
import Loading from '@/components/pay/loading'
import Qrcode from '@/components/qrcode'
import { clipboard } from '@/hooks/useCopy'
import Toast from '@/utils/toast'
import dayjs from 'dayjs'
import ConfirmModal, { IConfirmRef } from '@/components/modal/confirm'
import { queryOrder, OrderDTO } from '@/api'
import { useRequest } from 'ahooks'
import { div } from '@/utils'

interface iProps {
  payInfo: OrderDTO
  onConfirm: () => void
}

export function Order({ payInfo, onConfirm }: iProps) {
  const { t } = useTranslation()

  const { data: orderData, cancel } = useRequest(
    () =>
      queryOrder({
        payOrderId: payInfo.payOrderId,
      }),
    {
      pollingInterval: 5000,
      onSuccess: data => {
        // 接口返回错误、非支付中需要轮询
        if (data.success === false || data.data?.state !== 1) {
          cancel()
        }
        if (data.data?.state === 2) {
          // 支付成功
          confirmRef.current?.open()
        }
      },
    },
  )

  // 格式化訂單訊息
  const order = useMemo(
    () => (orderData?.success && orderData.data ? orderData.data : null),
    [orderData],
  )

  // 彈窗
  const confirmRef = useRef<IConfirmRef>(null)

  // 初始化倒數計時
  const isInit = useRef(false)
  const [leftTime, setLeftTime] = useState(0)

  useEffect(() => {
    if (isInit.current === false && order?.createdAt && order?.serviceTime) {
      isInit.current = true
      setLeftTime(order.createdAt + 15 * 60 * 1000 - order.serviceTime)
    }
  }, [order])

  // 倒數結束/訂單狀態變更則為過期數據
  const isExired = useMemo(
    () => orderData?.success === false || (order && (leftTime <= 0 || order.state > 2)),
    [leftTime, orderData, order],
  )

  // 複製
  const handleCopy = () => {
    clipboard(payInfo.payOrderId, () => {
      Toast.info(t('orderCopySucc'))
    })
  }

  // 支付完成提示
  const handleConfirm = () => {
    onConfirm && onConfirm()
    return true
  }

  return (
    <div className="max-w-[345px] max-md:max-w-full mx-auto my-28 max-md:my-0 max-md:px-4">
      <div className="max-md:bg-primary absolute h-60 w-full left-0 right-0 rounded-b-lg"></div>
      <div className=" bg-white rounded relative">
        {!order && <Loading className="absolute z-10 mt-4" />}
        <div className="flex justify-between p-5">
          <div>
            <div className="text-2xl text-dark font-bold">{`¥ ${
              order?.amount ? thousandsNumber(div(order.amount, 100)) : '--'
            }`}</div>
            {leftTime > 0 ? (
              <div className="text-sm text-subColor flex items-center">
                <span>{t('please')}</span>
                <Countdown
                  className="text-primary mx-1"
                  format="{minutes}:{seconds}"
                  leftTime={leftTime}
                  onEnd={() => setLeftTime(0)}
                />
                <span>{t('pay')}</span>
              </div>
            ) : null}
          </div>
          <div>
            <Image
              className="mx-auto"
              src="/images/alipay.svg"
              width={24}
              height={24}
              alt="alipay"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-4 relative">
          <Qrcode
            url={payInfo.payData}
            className="!w-[173px] !h-[173px] max-md:!w-[160px] max-md:!h-[160px]"
          />
          <div className="flex items-center mt-6 mb-3">
            {!isExired ? (
              <>
                <Image
                  src={`/images/scan.svg`}
                  alt="scan"
                  width={24}
                  height={24}
                  className="mr-4"
                />
                <div className=" text-dark text-sm font-semibold">
                  <p className="hidden max-md:block">{t('screenshot')}</p>
                  <p>{t('openAlipay')}</p>
                </div>
              </>
            ) : (
              <div className="text-dark relative z-20">{t('orderExpired')}</div>
            )}
          </div>
        </div>
      </div>
      {order?.payOrderId ? (
        <div className="my-4 bg-white rounded">
          <div className="p-2">
            <div className="flex justify-between p-2 text-sm border-b border-b-line">
              <div>{t('orderId') + '：'}</div>
              <div className="flex items-center">
                <div>{order.payOrderId}</div>
                <Image
                  width={24}
                  height={24}
                  src={'/images/copy.svg'}
                  alt="copy"
                  className="ml-2 hover:opacity-80 cursor-pointer"
                  onClick={handleCopy}
                />
              </div>
            </div>

            <div className="flex justify-between p-2 text-sm">
              <div>{t('orderTime') + ': '}</div>
              <div className="flex items-center" suppressHydrationWarning>
                {dayjs(order?.createdAt).format('YYYY-MM-DD HH:mm:ss')}
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <ConfirmModal ref={confirmRef} hideCloseIcon={true} onConfirm={handleConfirm}>
        <div>{t('payComplete')}</div>
      </ConfirmModal>
    </div>
  )
}
