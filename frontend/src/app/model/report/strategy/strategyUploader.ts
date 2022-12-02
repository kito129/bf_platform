import {Trade} from '../trade/trade';

export interface StrategyUploader{
  info: {
    name: string,
    id: number
    lastUpdate: number
  },
  trade: Trade,
}
