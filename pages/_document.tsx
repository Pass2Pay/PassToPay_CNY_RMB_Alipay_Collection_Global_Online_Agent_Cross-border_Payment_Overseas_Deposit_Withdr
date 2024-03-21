import { Html, Head, Main, NextScript } from 'next/document'
import i18nextConfig from '@/i18n'

export default function Document(props: any) {
  const currentLocale = props.__NEXT_DATA__.query.locale || i18nextConfig.language
  const buildTime = process.env.NEXT_PUBLIC_buildTime
  return (
    <Html lang={currentLocale} data-buildtime={buildTime}>
      <Head />
      <body className="bg-bg min-h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
