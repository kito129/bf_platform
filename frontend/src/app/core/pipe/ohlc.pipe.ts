import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ohcl'
})
export class OHLCPipe implements PipeTransform {

  transform(value: any): string {
    return `<div class="row">
              <h5 class="text-primary mr-2 ml-2">O: ${value.open}</h5>
              <h5 class="text-success mr-2">H: ${value.high}</h5>
              <h5 class="text-danger mr-2">L: ${value.low}</h5>
              <h4 class="text-warning mr-2">C: ${value.close}</h4>
            </div>` ;
  }

}
