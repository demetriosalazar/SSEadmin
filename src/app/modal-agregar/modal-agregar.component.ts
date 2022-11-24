import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal_actualizar/modal.service';

@Component({
  selector: 'app-modal-agregar',
  templateUrl: './modal-agregar.component.html',
  styleUrls: ['./modal-agregar.component.css']
})
export class ModalAgregarComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private modalS: ModalService) { }


  closeModal(){
    this.modalS.$modal_Agr.emit(false);

  }

}
