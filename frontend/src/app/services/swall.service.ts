import { Injectable } from '@angular/core';
import Swal, {SweetAlertIcon} from 'sweetalert2'
import {Utils} from '../model/utils';

@Injectable({
  providedIn: 'root'
})
export class SwallService {

  util = new Utils()

  constructor() { }

  showToast(title: string, icon: SweetAlertIcon){
    Swal.fire({
      position: 'top-end',
      icon,
      title,
      showConfirmButton: false,
      timer: this.util.swallTimer
    });
  }
}
