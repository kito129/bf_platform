import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'montecarlo'
})
export class MontecarloPipe implements PipeTransform {

  transform(value: boolean[]): number {
    return value.reduce(function(acc, val){
      return val ? acc+=1 : acc},0);
  }

}
