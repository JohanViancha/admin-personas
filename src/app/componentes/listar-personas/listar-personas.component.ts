import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-personas',
  templateUrl: './listar-personas.component.html',
  styleUrls: ['./listar-personas.component.css']
})

export class ListarPersonasComponent implements OnInit {
  dtOptions:DataTables.Settings= {};

  jsonObject=[{"UsuNom":"Yeila",
  "UsuApe":"Ardila", 
  "UsuTelFij":"3158402991",
  "UsuEmail":"ardila@example.com",
  "UsuDirRes":"Cra 24 # 23 - 04",
  "UsuarioEstado":"Activo",
  "UsuRol":"Administrador",
  "options":`<button [routerLink]="['/login']"  class="btn btn-warning text-light"><i class="fas fa-edit"></i></button> <button class="btn btn-danger text-light"><i class="fas fa-trash-alt"></i></button>`}];

  constructor(){

  }

  ngOnInit(): void {
    this.dtOptions = {

      "language": {
        "lengthMenu": "Mostrar _MENU_ registros por pagina",
        "zeroRecords": "No existen registros",
        "info": "",
        "infoEmpty": "",
        "infoFiltered": "",
        "loadingRecords": "Cargando...",
        "search": "Buscar:",
        "paginate": {
            "first": "Primero",
            "last": "Última",
            "next": "Siguiente",
            "previous": "Antes"
        }
    },
  
      responsive:true,
    }
    

  }





}
