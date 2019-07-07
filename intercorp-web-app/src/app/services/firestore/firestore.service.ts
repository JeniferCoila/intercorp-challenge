import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  //Crea un nuevo gato  
  public createClientData(data: { nombre: string, url: string }) {
    return this.firestore.collection('clients').add(data);
  }

  public getClients() {
    return this.firestore.collection('clients').snapshotChanges();
  }

}
