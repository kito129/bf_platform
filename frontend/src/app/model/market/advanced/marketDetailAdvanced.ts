import {MarketInfoAdvanced} from './marketInfoAdvanced';
import {MarketOddsAdvanced} from './marketOddsAdvanced';
import {MarketRunnersAdvanced} from './marketRunnersAdvanced';
import {MarketUpdatesBasic} from '../basic/marketUpdatesBasic';
import {MarketAdditionalInfoTennis} from '../marketAdditionalInfoTennis';

export interface MarketDetailAdvanced {
  marketId: string
  marketInfo: MarketInfoAdvanced,
  marketRunners: MarketRunnersAdvanced,
  marketOdds: MarketOddsAdvanced,
  marketUpdates: MarketUpdatesBasic,
  marketAdditionalInfo: MarketAdditionalInfoTennis
}
