import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { IPost } from '../common/ipost';

@Component({
  selector: 'app-route-posts',
  templateUrl: './route-posts.component.html',
  styleUrls: ['./route-posts.component.css']
})
export class RoutePostsComponent implements OnInit {
  posts: IPost[];

  constructor(private _postService: PostService) {
    this._postService.getAll().subscribe(response => {
      this.posts = response;
    });
  }

  ngOnInit() {
  }

}
