import { Component, Input, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/service/personas.service';
import Swal from 'sweetalert2';
import Persona from 'src/app/modelo/persona.modelo.js';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-registrar-personas',
  templateUrl: './registrar-personas.component.html',
  styleUrls: ['./registrar-personas.component.css']
})
export class RegistrarPersonasComponent implements OnInit {

  form = new FormControl();
  UsuNom:string;
  UsuApe:string;
  UsuTelFij:string;
  UsuEmail:string;
  UsuDirRes:string;
  UsuarioEstado:string;
  UsuRol:string;
  Password:string
  objectPersona:any;
  persona: Persona;
  constructor(private personasService:PersonasService) {
    this.UsuNom = "";
    this.UsuApe = "";
    this.UsuTelFij = "";
    this.UsuEmail = "";
    this.UsuDirRes = "";
    this.UsuarioEstado = "Activo";
    this.UsuRol = "Administrador";
    this.Password = "";
   }


   async registrarPersona(){

    this.persona = new Persona(this.UsuNom,this.UsuApe,this.UsuTelFij,this.UsuEmail,this.UsuDirRes,this.UsuarioEstado,this.UsuRol,this.Password);
    await this.personasService.registrarPersona(this.persona);
    Swal.fire({
      title: 'Exitoso!',
      text: 'La persona fue creada',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
   }
  ngOnInit(): void {
  }

}
