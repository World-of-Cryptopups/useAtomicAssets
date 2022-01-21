export interface PageLimitOrderParams {
  page?: number
  limit?: number
  order?: 'asc' | 'desc'
}

export interface BurnableTransferableParams {
  is_burnable?: boolean
  is_transferable?: boolean
}
