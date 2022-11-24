import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal-actualizar',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalActualizarComponent implements OnInit {

  constructor(private modalS: ModalService) { }


  ngOnInit(): void {
   
  }

  closeModal(){
    this.modalS.$modal_Act.emit(false);

  }

}
