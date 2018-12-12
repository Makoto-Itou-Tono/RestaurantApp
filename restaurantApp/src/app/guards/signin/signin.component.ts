import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private athSeervice: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm){
    this.athSeervice.login(form.value.email,form.value.password);
  }

}
