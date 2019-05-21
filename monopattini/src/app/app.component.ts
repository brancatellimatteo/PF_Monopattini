import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monopattini';
  public askIsVisible : boolean;
  public loginIsVisible : boolean;
  public signupIsVisible : boolean;

  constructor(public http: HttpClient) {
    this.askIsVisible = true;
  }

  public makeLoginVisible(): void {
    this.loginIsVisible = !this.loginIsVisible;
    this.askIsVisible = false;
  }

  public makeSignupVisible(): void {
    this.signupIsVisible = !this.signupIsVisible;
    this.askIsVisible = false;
  }
}
