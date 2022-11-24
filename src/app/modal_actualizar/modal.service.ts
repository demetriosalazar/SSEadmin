import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  $modal_Act = new EventEmitter<boolean>();
  $modal_Agr = new EventEmitter<boolean>();

}
