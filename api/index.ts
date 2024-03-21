import { request } from '@/utils/request'
import { Response, QueryDTO, OrderDTO } from './types'

export * from './types'

interface Idata {
  payOrderId: string
}

/* 获取订单信息 */
export function queryOrder(params: Idata) {
  return request.post<Response<QueryDTO>>('/api/pay/query', params, {
    toastErr: false,
  })
}

// 查询订单支付地址
export function unifiedOrder() {
  return request.post<Response<OrderDTO>>('/api/pay/unifiedOrder')
}
