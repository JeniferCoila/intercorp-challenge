import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  //Creates data from a new client
  public createClientData(data) {
    return this.firestore.collection('clients').add(data);
  }
  //Gets data of all clients
  public getClients() {
    return this.firestore.collection('clients').snapshotChanges();
  }

}
