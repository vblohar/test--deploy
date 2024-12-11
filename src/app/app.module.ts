import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { MainComponent } from './observable/main/main.component';
import { OfFromComponent } from './observable/of-from/of-from.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    ObservableComponent,
    AsyncAwaitComponent,
    FromEventComponent,
    WelcomePageComponent,
    IntervalComponent,
    MainComponent,
    OfFromComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
