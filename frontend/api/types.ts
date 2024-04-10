/**
 * ResponseDTO«List«ContractResponse»»
 */
export interface Response<T> {
  /**
   * 错误码,200表示成功
   */
  code: string
  /**
   * 业务数据
   */
  data: T
  /**
   * 消息
   */
  message: string
  success: boolean
  trace: string
}

export interface QueryDTO {
  /**
   * 金额
   */
  amount: number
  /**
   * 应用ID
   */
  appId: string
  /**
   * 商户号
   */
  body: string
  /**
   * 渠道单号
   */
  channelOrderNo: string
  /**
   * 客户端IP
   */
  clientIp: string
  /**
   * 二维码
   */
  codeImgUrl: string
  /**
   * 创建日期
   */
  createdAt: number
  /**
   * 币种
   */
  currency: string
  /**
   * 过期时间
   */
  expiredTime: number
  /**
   * 商户号
   */
  mchNo: string
  /**
   * 商户订单号
   */
  mchOrderNo: string
  /**
   * 订单状态
   */
  orderState: number
  /**
   * payData
   */
  payData: string
  /**
   * payDataType
   */
  payDataType: string
  /**
   * 商户订单号
   */
  payOrderId: string
  /**
   * 支付时间
   */
  serviceTime: number
  /**
   * 0-订单生成, 1-支付中, 2-支付成功, 3-支付失败, 4-已撤销, 5-已退款, 6-订单关闭
   */
  state: number
  /**
   * 商户号
   */
  subject: string
  /**
   * 支付方式
   */
  wayCode: string
}

export interface OrderDTO {
  /**
   * 商户订单号
   */
  mchOrderNo: string
  /**
   * 订单状态，0-订单生成, 1-支付中, 2-支付成功, 3-支付失败, 4-已撤销, 5-已退款, 6-订单关闭
   */
  orderState: number
  /**
   * 订单状态
   */
  payData: string
  /**
   * 订单状态
   */
  payDataType: string
  /**
   * 商户订单号
   */
  payOrderId: string
}
