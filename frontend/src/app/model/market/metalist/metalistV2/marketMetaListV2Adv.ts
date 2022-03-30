import {MarketUpdatesBasic} from '../../basic/marketUpdatesBasic';
import {MarketAdditionalInfoTennis} from '../../marketAdditionalInfoTennis';
import {MarketInfoAdvanced} from '../../advanced/marketInfoAdvanced';

export interface MarketMetaListV2Adv{
  marketInfo: MarketInfoAdvanced,
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
      tradedVolume: number,
      preMatchVolume: number,
      inPlayVolume: number,
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
      tradedVolume: number,
      preMatchVolume: number,
      inPlayVolume: number,
    }
  },
  marketUpdates: MarketUpdatesBasic
  marketAdditionalInfo: MarketAdditionalInfoTennis
}
