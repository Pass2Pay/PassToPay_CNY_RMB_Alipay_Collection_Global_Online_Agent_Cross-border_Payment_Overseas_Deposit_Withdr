import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import React, { useImperativeHandle, useRef, useState } from 'react'
import Btn from '@/components/btn'

export interface IModal {
  children: React.ReactNode
  hideCloseIcon?: boolean // 是否隱藏關閉按鈕
  onConfirm?: () => Promise<unknown> | boolean | null
  onCancel?: () => void
}

export interface IConfirmRef {
  open: () => void
}

const ConfirmModal = React.forwardRef((props: IModal, ref: React.Ref<IConfirmRef>) => {
  const { t } = useTranslation()
  const { children, onConfirm, onCancel, hideCloseIcon = false } = props
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(true)

  const getConfirmRes = (res: Promise<unknown> | boolean | null) =>
    new Promise(resolve => {
      // @ts-ignore
      if (res?.then) {
        resolve(res)
      } else if (typeof res === 'boolean') {
        resolve(res)
      } else {
        resolve(true)
      }
    })

  const handleConfirm = async () => {
    if (typeof onConfirm === 'function') {
      setLoading(true)
      const res = await getConfirmRes(onConfirm())
      setLoading(false)
      if (res === false) {
        return false
      }
    }
    setVisible(false)
  }
  const handleCancel = () => {
    onCancel && onCancel()
    setVisible(false)
  }

  useImperativeHandle(ref, () => ({
    open: () => {
      setVisible(true)
    },
  }))

  return (
    <div className={clsx({ hidden: !visible })}>
      <div
        tabIndex={-1}
        className={clsx(
          'flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full',
        )}
      >
        <div className="relative p-4 w-full max-w-sm max-h-full">
          <div className="relative bg-white rounded-lg shadow ">
            {hideCloseIcon === false && (
              <button
                type="button"
                className="absolute top-2 end-2 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                onClick={handleCancel}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            )}
            <div className="p-4 md:p-5 text-center">
              <h3 className="mt-6 mb-5 text-sm font-normal text-gray-500 ">{children}</h3>
              <Btn
                type="primary"
                className="flex-1 text-white font-medium rounded-lg text-sm items-center px-5 py-2.5 text-center"
                onClick={handleConfirm}
                loading={loading}
              >
                {t('confirm')}
              </Btn>
            </div>
          </div>
        </div>
      </div>
      <div onClick={handleCancel} className="bg-dark/30 fixed inset-0 z-40"></div>
    </div>
  )
})
ConfirmModal.displayName = 'ConfirmModal'

export default ConfirmModal
