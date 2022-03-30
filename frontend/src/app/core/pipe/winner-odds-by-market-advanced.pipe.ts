import { Pipe, PipeTransform } from '@angular/core';
import {MarketInfoAdvanced} from '../../model/market/advanced/marketInfoAdvanced';

@Pipe({
  name: 'winnerOddsByMarketAdvanced'
})
export class WinnerOddsByMarketAdvancedPipe implements PipeTransform {

  transform(market: MarketInfoAdvanced): any {

  }

}
