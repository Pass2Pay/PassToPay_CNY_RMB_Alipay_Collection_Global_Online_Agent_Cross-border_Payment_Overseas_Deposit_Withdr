import Image from 'next/image'
import { QRCodeCanvas } from 'qrcode.react'
import clsx from 'clsx'

interface iProps {
  className?: string
  url: string // qrcode url
}

function Qrcode({ className, url }: iProps) {
  const classNameMerge = clsx('relative', className)

  return (
    <div className={classNameMerge}>
      {url ? (
        <QRCodeCanvas
          className={classNameMerge}
          value={url}
          size={173}
          imageSettings={{
            src: '/images/alipay.svg',
            height: 24,
            width: 24,
            excavate: true,
          }}
        />
      ) : (
        <Image src={`/images/qrcode-hidden.png`} fill alt="qrcode" />
      )}
    </div>
  )
}

export default Qrcode
