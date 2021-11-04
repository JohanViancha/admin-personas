import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { Persona } from '../modelo/persona.modelo.js';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  persona :Persona;
  constructor(private firebase: AngularFirestore) {
  }

  registrarPersona(persona:Persona):Promise<any>{
    console.log(persona);
   return this.firebase.collection('personas').add({...persona});
  }


  listarPersonas():Observable<any>{
    return this.firebase.collection('personas').snapshotChanges();
  }

  eliminarPersona(id:any): Promise<any>{
    return this.firebase.collection('personas').doc(id).delete();
  }


  addPersonaEditar(persona:Persona){
    this.persona = {...persona};
  }

  getPersonaEditar(){
    return this.persona;
  }

  editarPersona(id:string, persona:Persona):Promise<Persona>{
    return this.firebase.collection('personas').doc(id).update({...persona});
  }
}
