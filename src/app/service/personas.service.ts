import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private personaCollection: AngularFirestoreCollection<any>;

  personas:any;

  constructor(private afs:AngularFirestore) {
    this.personaCollection = afs;
    this.personas = [];
  }

  registrarPersona(persona){
    this.personas.push(persona);
    return true;
  }

  getPersonas(){
    return this.personas;
  }
}
