import { Component, OnInit, Output } from '@angular/core';
import { PersonasService } from 'src/app/service/personas.service';

@Component({
  selector: 'app-listar-personas',
  templateUrl: './listar-personas.component.html',
  styleUrls: ['./listar-personas.component.css']
})

export class ListarPersonasComponent implements OnInit {
  dtOptions:DataTables.Settings= {};

  jsonObject:any;

  constructor(private personaService:PersonasService){
    this.jsonObject = personaService.getPersonas();
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
