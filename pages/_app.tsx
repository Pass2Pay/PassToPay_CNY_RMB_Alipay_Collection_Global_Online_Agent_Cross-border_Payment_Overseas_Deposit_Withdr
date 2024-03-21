import type { AppProps } from 'next/app'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/i18n'
import { SnackbarProvider } from 'notistack'
import { SnackbarUtilsConfig } from '@/utils/toast'
import '@/public/scss/variables.scss'
import '@/public/scss/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <SnackbarProvider maxSnack={3}>
        <SnackbarUtilsConfig />
        <Component {...pageProps} />
      </SnackbarProvider>
    </I18nextProvider>
  )
}

export default MyApp
