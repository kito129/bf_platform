import {MarketMetaListV2} from '../metalist/metalistV2/marketMetaListV2';

export interface MarketFilterBasket{
  market: MarketMetaListV2[],
  basket: string[],
  removed: string[],
  activeFilter: number
}
