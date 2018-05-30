import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.css']
})
export class TopPanelComponent implements OnInit {
  @Input('links') links: any[];

  constructor(public service: AuthService) { }

  ngOnInit() {
  }

}
