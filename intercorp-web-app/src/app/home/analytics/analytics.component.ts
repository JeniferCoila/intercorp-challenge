import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  constructor(private firestoreService: FirestoreService) { }
  clients = [];

  ngOnInit() {
    this.firestoreService.getClients().subscribe((docSnapshot) => {
      this.clients = [];
      docSnapshot.forEach((catData: any) => {
        this.clients.push({
          id: catData.payload.doc.id,
          data: catData.payload.doc.data()
        });
      })
    });
  }

}
