import {Trade} from '../trade/trade';
import {Strategy} from './strategy';

export interface CompareStrategy{
  strategy: Strategy
  trades: Trade[]
}
