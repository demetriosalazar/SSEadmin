import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ModalService } from '../modal_actualizar/modal.service';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DEMOComponent implements OnInit {

  constructor(private modalS: ModalService,private router: Router) { }

  ngOnInit(): void {
    this.modalS.$modal_Act.subscribe((val) => {
      this.switchModalAct = val;
    });
    this.modalS.$modal_Agr.subscribe((val) => {
      this.switchModalAgr = val;
    });
  }

  switchModalAct: boolean = false;
  switchModalAgr: boolean = false;

  agregar(){
    this.modalS.$modal_Agr.emit(true);
    this.switchModalAgr = true;
  }
 
  actualizar(){
    this.modalS.$modal_Act.emit(true);
    this.switchModalAct = true;
  }

  cerrarSesion(){
    localStorage.removeItem("token");
    this.router.navigateByUrl("/Login")
  }

  eliminar(){
    Swal.fire({
      title: 'Estas seguro?',
      text: "Eliminaras un elemento",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado',
          'Se eliminao de manera exitosa',
          'success'
        )
      }
    })
  }

}
