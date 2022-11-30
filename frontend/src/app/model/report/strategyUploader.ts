import {NewTrade} from './new/newTrade';

export interface StrategyUploader{
  info: {
    name: string,
    id: number
    lastUpdate: number
  },
  trade: NewTrade,
}
