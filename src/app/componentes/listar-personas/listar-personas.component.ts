import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { PersonasService } from 'src/app/service/personas.service';
import Swal from 'sweetalert2';
import Persona from 'src/app/modelo/persona.modelo.js';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-listar-personas',
  templateUrl: './listar-personas.component.html',
  styleUrls: ['./listar-personas.component.css']
})

export class ListarPersonasComponent implements OnInit {

  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;


  dtTrigger = new Subject();

  dtOptions:DataTables.Settings= {};
  ObjectPersonas:Persona[];
  swal:any;
  constructor(private personaService:PersonasService){

  this.swal =  Swal.fire({
      title: "Cargando ...",
      allowOutsideClick: false,
      text: "Por favor espere un momento",
      didOpen: () => {
        Swal.showLoading();
    }
  });

    this.listarPersonas();
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
      "searching": false
    }



  }

  listarPersonas(){

    this.personaService.listarPersonas().subscribe(doc=>{
      this.ObjectPersonas = [];
      doc.forEach((element:any) => {
        this.ObjectPersonas.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        });

      });

      this.swal.close();
    });
  }

  eliminarPersona(id:string){
    Swal.fire({
      title: '¿Seguro que desea eliminar esta persona?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText:'No'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Registro eliminado',
          '',
          'success'
        );
        this.personaService.eliminarPersona(id).then(()=>{
        })
        .catch(err=>{
          Swal.fire(
            'Error al eliminar!',
            err,
            'error'
          )
        });

      }
    })


  }

  editarPersona(persona:Persona){
    this.personaService.addPersonaEditar(persona);
  }

}
