import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private Logged: boolean = false;

  AuhtNext = new Subject<boolean>();

  constructor(private router:Router) { }

  login(email: string, password: string): boolean{
    console.log(email+ ' ' + password);
    if (email == "Carlos@live.com" && password == "54321") {
      this.Logged = true;
      this.router.navigate(['/recipes']);
    } else {
      this.Logged = false;
    }
    this.AuhtNext.next(this.Logged);
    return this.Logged;
  }

  UserLogged() {
    return this.Logged;
  }

  authentication() {
    this.Logged = false;
    this.AuhtNext.next(this.Logged);
  }

}
