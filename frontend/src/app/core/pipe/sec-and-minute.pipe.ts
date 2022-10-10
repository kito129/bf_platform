import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secAndMinute'
})
export class SecAndMinutePipe implements PipeTransform {

  transform(duration: number): string {

    duration = Math.abs(duration)
    const milliseconds = ((duration % 1000) / 100)
    const seconds = Math.floor((duration / 1000) % 60)
    const minutes = Math.floor((duration / (1000 * 60)) % 60)
    const hours = Math.floor((duration / (1000 * 60 * 60)));

    const hoursS = (hours < 10) ? '0' + hours : hours;
    const minutesS = (minutes < 10) ? '0' + minutes : minutes;
    const secondsS = (seconds < 10) ? '0' + seconds : seconds;

    return hoursS + ':' + minutesS + ':' + secondsS;
  }
}

