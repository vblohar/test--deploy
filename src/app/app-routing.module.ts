import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { MainComponent } from './observable/main/main.component';
import { OfFromComponent } from './observable/of-from/of-from.component';

const routes: Routes = [
  {path:'', component:WelcomePageComponent, },
  {path: 'promise', component: PromiseComponent},
  {path: 'async-await', component: AsyncAwaitComponent},
  {path: 'observable', component: ObservableComponent,children:[
    {path: 'main', component:MainComponent},
    {path: 'interval', component:IntervalComponent},
    {path: 'of-from', component:OfFromComponent}
  ]},
  {path: 'from-event', component: FromEventComponent},
  {path:'welcome', component:WelcomePageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
