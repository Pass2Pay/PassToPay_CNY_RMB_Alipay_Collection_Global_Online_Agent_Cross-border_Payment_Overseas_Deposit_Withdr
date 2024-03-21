import * as React from 'react'
import { OptionsObject, SnackbarMessage, ProviderContext as WithSnackbarProps, useSnackbar } from 'notistack'

interface IProps {
  setUseSnackbarRef: (showSnackbar: WithSnackbarProps) => void
}

const InnerSnackbarUtilsConfig: React.FC<IProps> = (props: IProps) => {
  props.setUseSnackbarRef(useSnackbar())
  return null
}

let useSnackbarRef: WithSnackbarProps
const setUseSnackbarRef = (useSnackbarRefProp: WithSnackbarProps) => {
  useSnackbarRef = useSnackbarRefProp
}

export const SnackbarUtilsConfig = () => <InnerSnackbarUtilsConfig setUseSnackbarRef={setUseSnackbarRef} />

const autoHideDuration: any = 2000

const anchorOrigin: any = {
  vertical: 'top',
  horizontal: 'center',
}
const Toast = {
  success(msg: SnackbarMessage, option?: OptionsObject) {
    this.toast(msg, {
      variant: 'success',
      anchorOrigin,
      autoHideDuration,
      ...option,
    })
  },
  warning(msg: SnackbarMessage, option?: OptionsObject) {
    this.toast(msg, {
      variant: 'warning',
      anchorOrigin,
      autoHideDuration,
      ...option,
    })
  },
  info(msg: SnackbarMessage, option?: OptionsObject) {
    this.toast(msg, {
      variant: 'info',
      anchorOrigin,
      autoHideDuration,
      ...option,
    })
  },
  error(msg: SnackbarMessage, option?: OptionsObject) {
    this.toast(msg, {
      variant: 'error',
      anchorOrigin,
      autoHideDuration,
      ...option,
    })
  },
  toast(msg: SnackbarMessage, option?: OptionsObject) {
    useSnackbarRef?.enqueueSnackbar(msg, option)
  },
}

export default Toast
