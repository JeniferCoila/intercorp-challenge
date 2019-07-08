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
      birthDate: this.birthDate,
      deadDate: `${(parseInt(this.birthDate.substring(0,4))) +80}-${this.birthDate.substring(5,10)}`
    };
    console.log(this.birthDate.substring(0,4))
    console.log((parseInt(this.birthDate.substring(0,4))) +80)
    console.log(this.birthDate.substring(5,10))
    console.log(clientData)
    this.firestoreService.createClientData(clientData);
    this.name = ''; 
    this.lastName = ''; 
    this.age = 0; 
    this.birthDate ='';
  }
}