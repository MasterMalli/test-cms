import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-route-login',
  templateUrl: './route-login.component.html',
  styleUrls: ['./route-login.component.css']
})
export class RouteLoginComponent implements OnInit {
  meaning: number;
  constructor(public service: AuthService) {
  }

  ngOnInit() {
  }

}
