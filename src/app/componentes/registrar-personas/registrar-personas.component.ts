import { Component, Input, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/service/personas.service';

@Component({
  selector: 'app-registrar-personas',
  templateUrl: './registrar-personas.component.html',
  styleUrls: ['./registrar-personas.component.css']
})
export class RegistrarPersonasComponent implements OnInit {
  
  UsuNom:string;
  UsuApe:string;
  UsuTelFij:string;
  UsuEmail:string;
  UsuDirRes:string;
  UsuarioEstado:string;
  UsuRol:string;
  Password:string
  objectPersona:any;
  constructor(private personasService:PersonasService) {
    this.UsuNom = "";
    this.UsuApe = "";
    this.UsuTelFij = "";
    this.UsuEmail = "";
    this.UsuDirRes = "";
    this.UsuarioEstado = "";
    this.UsuRol = "";
    this.Password = "";
    this.objectPersona = {};
   }


   async registrarPersona(){
    this.objectPersona = {"UsuNom":this.UsuNom,
    "UsuApe":this.UsuApe, 
    "UsuTelFij":this.UsuTelFij,
    "UsuEmail":this.UsuEmail,
    "UsuDirRes":this.UsuDirRes,
    "UsuarioEstado":this.UsuarioEstado,
    "UsuRol":this.UsuRol,
    "Password":this.Password}
    await this.personasService.registrarPersona(this.objectPersona);
    alert("Persona registrada");
   }
  ngOnInit(): void {
  }

}
