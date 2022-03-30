import {MarketInfoAdvanced} from '../advanced/marketInfoAdvanced';
import {MarketRunnersAdvanced} from '../advanced/marketRunnersAdvanced';
import {MarketUpdatesBasic} from '../basic/marketUpdatesBasic';
import {MarketAdditionalInfoTennis} from '../marketAdditionalInfoTennis';


export interface MarketMetaListAdvanced {
  marketId: string
  marketType: string
  marketInfo: MarketInfoAdvanced,
  marketRunners: MarketRunnersAdvanced,
  marketUpdates: MarketUpdatesBasic,
  marketAdditionalInfo: MarketAdditionalInfoTennis
}
