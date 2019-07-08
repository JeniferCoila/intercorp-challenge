import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  constructor(private firestoreService: FirestoreService ) { }
   name: string;
   lastName: string;
   age: number;
   birthDate: string;



  ngOnInit() {
  }

  sendData(){
    const clientData = {
      name: this.name,
      lastName: this.lastName,
      age: this.age,
      birthDate: this.birthDate
    };
    console.log(clientData)
    this.firestoreService.createClientData(clientData);
    
  }
}


