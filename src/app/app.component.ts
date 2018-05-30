import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'managment';
  links: any[];

  constructor() {
    this.links = [
      {url: '/', text: 'Go to home page'},
      {url: 'posts', text: 'Go to posts'},
      {url: 'edit-posts', text: 'Go to edit posts'}
    ];
  }
}
