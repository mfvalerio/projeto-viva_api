import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ActionsComponent } from './actions/actions.component';
import { EventFormComponent } from './events/event-form/event-form.component';
import { EventsComponent } from './events/events/events.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'events', component: EventsComponent},
  // { path: 'events', pathMatch: 'full', redirectTo: 'events' },
  // { 
  //   path: 'events',
  //   loadChildren: () => import('./events/events.module').then(m => m.EventsModule)
  //   },
  { path: 'new', component: EventFormComponent },
  { path: 'actions', component: ActionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
