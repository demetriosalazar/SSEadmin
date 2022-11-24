import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ModalAgregarComponent } from './modal-agregar/modal-agregar.component';
import { ModalActualizarComponent } from './modal_actualizar/modal.component';
import { DEMOComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DEMOComponent,
    ModalActualizarComponent,
    ModalAgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
