import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyK'
})
export class CurrencyKPipe implements PipeTransform {

  transform(value: any): string {
    if(value<1000){
      return Math.round(value*100)/100 + ' €';
    }else if(value<1000000){
      return Math.round(value/1000) + 'K €';
    } else {
      return Math.round((value/1000000)*100)/100 + 'M €';
    }
  }

}
