import React from 'react'
import clsx from 'clsx'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface Iprops {
  children: React.ReactNode
  className?: string
}

function BasicLayout({ className, children }: Iprops) {
  //  fix the react-hydration-error
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <>
      <Head>
        <title>{'Passto Pay'}</title>
        <meta name="description" content={'Passto Pay'} />
      </Head>
      <main className={clsx(className)}>
        <div className="bg-bg min-h-full">
          <div className="bg-primary">
            <div className="flex items-center container mx-auto max-w-6xl h-20 px-4 max-md:h-auto max-md:pt-8 max-md:pb-6">
              <div className="relative w-[170px] h-[20px] max-md:w-[135px]">
                <Image src={`/images/logo.svg`} fill alt="logo" />
              </div>
            </div>
          </div>
          {mounted && children}
        </div>
      </main>
    </>
  )
}

export default BasicLayout
