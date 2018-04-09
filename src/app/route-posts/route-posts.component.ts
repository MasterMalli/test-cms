import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { IPost } from '../submit-post/submit-post.component';

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
