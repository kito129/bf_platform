import {MarketUpdatesBasic} from '../basic/marketUpdatesBasic';
import {MarketInfoBasic} from '../basic/marketInfoBasic';
import {MarketRunnersBasic} from '../basic/marketRunnersBasic';
import {MarketAdditionalInfoTennis} from '../marketAdditionalInfoTennis';

export interface MarketMetaListBasic {
  marketInfo: MarketInfoBasic,
  marketRunners: MarketRunnersBasic,
  marketUpdates: MarketUpdatesBasic
  marketAdditionalInfo: MarketAdditionalInfoTennis
}

