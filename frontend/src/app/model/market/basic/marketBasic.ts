import {MarketInfoBasic} from './marketInfoBasic';
import {MarketRunnersBasic} from './marketRunnersBasic';
import {MarketOddsBasic} from './marketOddsBasic';
import {MarketUpdatesBasic} from './marketUpdatesBasic';
import {MarketAdditionalInfoTennis} from '../marketAdditionalInfoTennis';


export interface MarketBasic {
  marketId: string
  marketInfo: MarketInfoBasic,
  marketRunners: MarketRunnersBasic,
  marketOdds: MarketOddsBasic,
  marketUpdates: MarketUpdatesBasic
  marketAdditionalInfo: MarketAdditionalInfoTennis
}




