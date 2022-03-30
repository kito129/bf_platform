import {Trade} from './trade';

export interface StrategyUploader{
  info: {
    name: string,
    id: number
    lastUpdate: number
  },
  trade: Trade,
}
