import React, { useMemo } from 'react'
import clsx from 'clsx'
import Link from 'next/link'

export interface IBtn {
  children: React.ReactNode
  type?: string // default primary
  disabled?: boolean // is disabled
  onClick?: () => void
  href?: string
  block?: boolean
  className?: string
  loadingClassName?: string
  size?: string // default small large
  loading?: boolean
}

function Btn({
  size,
  className,
  loadingClassName,
  type,
  disabled,
  block,
  onClick,
  children,
  href,
  loading = true,
}: IBtn) {
  const handleClick = () => {
    if (disabled) return
    onClick?.()
  }
  const formatClsx = clsx([
    'items-center justify-center',
    className,
    {
      'h-8 rounded': size == 'default',
      'h-12 rounded-lg px-12': size === 'large',
      'w-full flex': block,
      'inline-flex': !block,
      'cursor-pointer': !disabled,
      'opacity-50 !hover:opacity-50 cursor-not-allowed': disabled || loading,
      'text-light': type,
      'bg-primary': type === 'primary',
      'hover:opacity-80': type === 'primary' && !disabled && !loading,
    },
  ])

  const formatChildren = useMemo(
    () => (
      <>
        {loading && <div className={clsx('spinner mr-3', loadingClassName)} />}
        {children}
      </>
    ),
    [loading, loadingClassName, children],
  )

  if (href && !href.startsWith('http')) {
    return (
      <Link className={formatClsx} onClick={handleClick} href={href}>
        {formatChildren}
      </Link>
    )
  }
  return (
    <a onClick={handleClick} className={formatClsx}>
      {formatChildren}
    </a>
  )
}

export default Btn
