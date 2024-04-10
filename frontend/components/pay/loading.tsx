import Image from 'next/image'
import clsx from 'clsx'

interface iProps {
  className?: string
}

function Loading({ className }: iProps) {
  return (
    <div className={clsx('flex items-center justify-center bg-white/90 w-full h-full', className)}>
      <Image
        src={'/images/loading.svg'}
        className="animate-spin"
        width={50}
        height={50}
        alt="loading"
      />
    </div>
  )
}

export default Loading
