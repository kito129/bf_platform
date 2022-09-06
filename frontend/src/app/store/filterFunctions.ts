import {MarketMetaListV2} from '../model/market/metalist/metalistV2/marketMetaListV2';
import {Filter, FilterType} from '../model/market/filter/basketFilter';

export function filterBasicMarkets(inputList: MarketMetaListV2[], filterState: Filter[]): MarketMetaListV2[]{

  let tempList = inputList
  for(const filter of filterState){
    if(filter.active){
      tempList = tempList.filter(data =>{
        switch (filter.name){
          case 'runners':
            return filterRunner(data, filter)
          case 'haveAdditionalInfo':
            return data.marketInfo.marketInfo.metadata.haveAdditionalInfo
          case 'matchOdds':
            return data.marketInfo.marketInfo.name.indexOf('Match Odds')!==-1
          case 'setWinner':
            return data.marketInfo.marketInfo.name.indexOf('Set')!==-1
          case 'set1Winner':
            return data.marketInfo.marketInfo.name.indexOf('Set 1 Winner')!==-1
          case 'set2Winner':
            return data.marketInfo.marketInfo.name.indexOf('Set 2 Winner')!==-1
          case 'underOver':
            return data.marketInfo.marketInfo.name.indexOf('Over/Under')!==-1
          case 'tennis':
            return data.marketInfo.marketInfo.sport.indexOf('TENNIS')!==-1
          case 'soccer':
            return data.marketInfo.marketInfo.sport.indexOf('SOCCER')!==-1
          case 'bspWinner':
            return returnFilter(data.marketRunners.runnerWinner.inPlayOdds, filter.min, filter.max , filter)
          case 'maxWinner':
            return returnFilter(data.marketRunners.runnerWinner.maxInPlay, filter.min, filter.max , filter)
          case 'minWinner':
            return returnFilter(data.marketRunners.runnerWinner.minInPlay, filter.min, filter.max , filter)
          case 'maxLoser':
            return returnFilter(data.marketRunners.runnerLoser.maxInPlay, filter.min, filter.max , filter)
          case 'minLoser':
            return returnFilter(data.marketRunners.runnerLoser.minInPlay, filter.min, filter.max , filter)
          case 'bspLoser':
            return returnFilter(data.marketRunners.runnerLoser.inPlayOdds, filter.min, filter.max , filter)
          case 'duration':
            const time1 = filter.min * 1000 * 60
            const time2 = filter.max * 1000 * 60
            return returnFilter(data.marketInfo.marketInfo.metadata.inPlayDuration, time1, time2, filter)
          case 'oddsPrematch':
            return returnFilter(data.marketInfo.marketInfo.metadata.prematchNumberOddsNumber, filter.min, filter.max , filter)
          case 'oddsInplay':
            return returnFilter(data.marketInfo.marketInfo.metadata.inplayNumberOddsNumber,filter.min, filter.max , filter)
          case 'inplayUpdates':
            return returnFilter(data.marketInfo.marketInfo.metadata.inplayUpdatesNumber, filter.min, filter.max , filter)
          case 'date':
            return returnFilter(data.marketInfo.marketInfo.metadata.inPlayTime, filter.min, filter.max , filter)
          case 'bsp':
            switch (filter.type){
              case FilterType.between:
                return (data.marketRunners.runnerWinner.inPlayOdds >= filter.min && data.marketRunners.runnerWinner.inPlayOdds <= filter.max) ||
                  (data.marketRunners.runnerLoser.inPlayOdds > filter.min && data.marketRunners.runnerLoser.inPlayOdds < filter.max)
              case FilterType.outside:
                return (data.marketRunners.runnerWinner.inPlayOdds < filter.min && data.marketRunners.runnerWinner.inPlayOdds > filter.max) ||
                  (data.marketRunners.runnerLoser.inPlayOdds < filter.min && data.marketRunners.runnerLoser.inPlayOdds > filter.max)
              case FilterType.equals:
                return (data.marketRunners.runnerWinner.inPlayOdds === filter.min) ||
                  (data.marketRunners.runnerLoser.inPlayOdds === filter.min)
              case FilterType.lessOrEquals:
                return (data.marketRunners.runnerWinner.inPlayOdds <= filter.min) ||
                  (data.marketRunners.runnerLoser.inPlayOdds <= filter.min)
              case FilterType.lessThan:
                return (data.marketRunners.runnerWinner.inPlayOdds < filter.min) ||
                  (data.marketRunners.runnerLoser.inPlayOdds < filter.min)
              case FilterType.moreOrEquals:
                return (data.marketRunners.runnerWinner.inPlayOdds >= filter.min) ||
                  (data.marketRunners.runnerLoser.inPlayOdds >= filter.min)
              case FilterType.moreThan:
                return (data.marketRunners.runnerWinner.inPlayOdds > filter.min) ||
                  (data.marketRunners.runnerLoser.inPlayOdds > filter.min)
              case FilterType.notEquals:
                return (data.marketRunners.runnerWinner.inPlayOdds !== filter.min) ||
                  (data.marketRunners.runnerLoser.inPlayOdds !== filter.min)
            }
            break
        }
      })
    }
  }

  return tempList
}

function returnFilter(input: number, min: number, max: number, filter: Filter){
  switch (filter.type){
    case FilterType.between:
      return (input >= min && input <= max)
    case FilterType.outside:
      return (input < min && input > max)
    case FilterType.equals:
      return (input === min)
    case FilterType.lessOrEquals:
      return (input <= min)
    case FilterType.lessThan:
      return (input < min)
    case FilterType.moreOrEquals:
      return (input >= min)
    case FilterType.moreThan:
      return (input > min)
    case FilterType.notEquals:
      return (input !== min)
  }
}

function filterRunner(market: MarketMetaListV2, filter: Filter){
  return filter.listElement.includes(market.marketRunners.runnerWinner.id) || filter.listElement.includes(market.marketRunners.runnerLoser.id)
}
