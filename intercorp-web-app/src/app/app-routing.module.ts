import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './home/form/form.component';
import { ClientListComponent } from './home/client-list/client-list.component';
import { AnalyticsComponent } from './home/analytics/analytics.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
    children:[
      {path: '', component: FormComponent},
      {path: 'list', component: ClientListComponent},
      {path: 'analytics', component:AnalyticsComponent}
    ]
    
},

];

@NgModule({
  imports: [NgbModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
