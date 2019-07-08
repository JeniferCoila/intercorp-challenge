import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor(private firestoreService: FirestoreService) { }
  clientsAnalyic = [];
  ngOnInit() {
    this.firestoreService.getClients().subscribe((docSnapshot) => {
      this.clientsAnalyic = [];
      docSnapshot.forEach((catData: any) => {
        this.clientsAnalyic.push({
          id: catData.payload.doc.id,
          data: catData.payload.doc.data()
        });
      })
    });
  }
  getMedia(){
    return parseFloat(((this.clientsAnalyic.reduce((total ,client) => total + client.data.age, 0))
    /this.clientsAnalyic.length).toFixed(2));
  }
  getStandardDesv(){
    //Media of a clients age
    const media = this.getMedia();
    //obtaining the power of 2 of the absolute value of difference bewtween age and media
    const arrayDifference = this.clientsAnalyic.map(client => Math.pow(Math.abs(client.data.age - media), 2));
    //getting sum of all values and divide into the number of clients
    const sumDiff = (arrayDifference.reduce((total, resultA) => total + resultA, 0))/this.clientsAnalyic.length;
    //return square root of sum
    return  parseFloat(Math.sqrt(sumDiff).toFixed(2));
  }
}