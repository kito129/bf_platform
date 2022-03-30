import {MarketInfoBasic} from '../../basic/marketInfoBasic';
import {MarketUpdatesBasic} from '../../basic/marketUpdatesBasic';
import {MarketAdditionalInfoTennis} from '../../marketAdditionalInfoTennis';

export interface MarketMetaListV2{
  marketInfo: MarketInfoBasic,
  marketRunners: {
    _id: string;
    marketId: string,
    marketType: string,
    runnerWinner: {
      id: number,
      name: string,
      status: string,
      inPlayOdds: number,
      inPlayTime:  number,
      avgPrematch:  number,
      closedOdds:  number,
      maxPrematch:  number,
      minPrematch:  number,
      maxInPlay:  number,
      minInPlay:  number,
      inPlayIndex:  number,
      lengthOdds: number,
      lengthOddsPrematch:  number,
      lengthOddsInPlay:  number,
      inPlayOddsOver2:  number,
      inPlayOddsUnder2:  number,
    },
    runnerLoser: {
      id: number,
      name: string,
      status: string,
      inPlayOdds: number,
      inPlayTime:  number,
      avgPrematch:  number,
      closedOdds:  number,
      maxPrematch:  number,
      minPrematch:  number,
      maxInPlay:  number,
      minInPlay:  number,
      inPlayIndex:  number,
      lengthOdds: number,
      lengthOddsPrematch:  number,
      lengthOddsInPlay:  number,
      inPlayOddsOver2:  number,
      inPlayOddsUnder2:  number,
    }
  },
  marketUpdates: MarketUpdatesBasic
  marketAdditionalInfo: MarketAdditionalInfoTennis
}
