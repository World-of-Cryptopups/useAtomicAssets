// custom typings

import { ILightSchema } from './atomicassets-js'

export interface IAccountsProps {
  account: string
  assets: string
}

export interface ISales {
  market_contract: string
  assets_contract: string
  sale_id: string
  seller: string
  buyer: string
  offer_id: string
  price: Price
  listing_price: number
  listing_symbol: string
  assets: Asset[]
  maker_marketplace: string
  taker_marketplace: string
  collection: Collection
  state: number
  updated_at_block: string
  updated_at_time: string
  created_at_block: string
  created_at_time: string
}

export interface Asset {
  contract: string
  asset_id: string
  owner: string
  name: string
  is_transferable: boolean
  is_burnable: boolean
  template_mint: string
  collection: Collection
  schema: ILightSchema
  template: Template
  backed_tokens: Price[]
  immutable_data: Data
  mutable_data: Data
  data: Data
  burned_by_account: string
  burned_at_block: string
  burned_at_time: string
  updated_at_block: string
  updated_at_time: string
  transferred_at_block: string
  transferred_at_time: string
  minted_at_block: string
  minted_at_time: string
}

export interface Price {
  token_contract: string
  token_symbol: string
  token_precision: number
  amount: string
}

export interface Collection {
  collection_name: string
  name: string
  author: string
  allow_notify: boolean
  authorized_accounts: string[]
  notify_accounts: string[]
  market_fee: number
  created_at_block: string
  created_at_time: string
}

export type Data = Record<string, any>

export interface Format {
  name: string
  type: string
}

export interface Template {
  template_id: string
  max_supply: string
  issued_supply: string
  is_transferable: boolean
  is_burnable: boolean
  immutable_data: Data
  created_at_time: string
  created_at_block: string
}
