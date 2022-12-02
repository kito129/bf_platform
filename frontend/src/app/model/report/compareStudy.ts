import {Study} from '../study/study/study';
import {Trade} from './trade/trade';

export interface CompareStudy{
  study: Study
  trades: Trade[]
}
