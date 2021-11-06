import { ListarPersonasComponent } from './componentes/listar-personas/listar-personas.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrarPersonasComponent } from './componentes/registrar-personas/registrar-personas.component';


const appRoutes = [
  { path: 'admin-personas', component: LoginComponent,  pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'listar-personas', component: ListarPersonasComponent},
  { path: 'registrar-personas', component: RegistrarPersonasComponent},
  { path: 'registrar-personas/:id', component: RegistrarPersonasComponent}
];

export const Routing = RouterModule.forRoot(appRoutes);
