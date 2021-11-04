import { Routes,RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrarPersonasComponent } from './componentes/registrar-personas/registrar-personas.component';
import { ListarPersonasComponent } from './componentes/listar-personas/listar-personas.component';
import { Routing } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

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
    FormsModule,
    Routing,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
