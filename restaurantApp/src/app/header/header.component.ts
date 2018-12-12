import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../guards/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  editMode = false;
  constructor(private authService: AuthService) { }
  private subscription: Subscription;

  ngOnInit() {
    this.editMode = this.authService.UserLogged();
    this.subscription = this.authService.AuhtNext.subscribe(
      (element: boolean) => {
        this.editMode = element;
      }
    );
  }

  change() {
    this.authService.authentication();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
