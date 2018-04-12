import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { IPost } from '../common/ipost';


@Component({
  selector: 'app-route-home',
  templateUrl: './route-home.component.html',
  styleUrls: ['./route-home.component.css']
})
export class RouteHomeComponent implements OnInit {
  posts: IPost[];

  constructor(private _postService: PostService) {
    this._postService.getAll().subscribe(response => {
      this.posts = response;
    });
  }

  ngOnInit() {
  }

}
