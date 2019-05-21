import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; //Bootstrap
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; //client
import { AgmCoreModule } from '@agm/core';
//import { MappaComponent } from './mappa/mappa.component';
import { SignupComponent } from './signup/signup.component'; //Mappe
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    //MappaComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCzUI8LYmnHPyFrtRT8Q8IEREZfOygUl-U' //walter
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
