import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AngularFireModule,  } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormComponent } from './home/form/form.component';
import { ClientListComponent } from './home/client-list/client-list.component';
import { AnalyticsComponent } from './home/analytics/analytics.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FormComponent,
    ClientListComponent,
    AnalyticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireDatabaseModule
    ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
