import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  personas:any;

  constructor() { 
    this.personas = [];
  }

  registrarPersona(persona){
    this.personas.push(persona);
    console.log(persona);
    return true;
  }

  getPersonas(){
    return this.personas;
  }
}
