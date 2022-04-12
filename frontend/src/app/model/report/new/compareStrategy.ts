import {NewTrade} from './newTrade';
import {Strategy} from '../strategy';

export interface CompareStrategy{
  strategy: Strategy
  trades: NewTrade[]
}
