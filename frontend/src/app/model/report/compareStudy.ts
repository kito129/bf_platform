import {Study} from '../study/study/study';
import {NewTrade} from './new/newTrade';

export interface CompareStudy{
  study: Study
  trades: NewTrade[]
}
