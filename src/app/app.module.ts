import { Routes,RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrarPersonasComponent } from './componentes/registrar-personas/registrar-personas.component';
import { ListarPersonasComponent } from './componentes/listar-personas/listar-personas.component';
import { Routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarPersonasComponent,
    ListarPersonasComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
