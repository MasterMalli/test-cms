import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { IPost } from '../submit-post/submit-post.component';

@Component({
  selector: 'route-edit-posts',
  templateUrl: './route-edit-posts.component.html',
  styleUrls: ['./route-edit-posts.component.css']
})
export class RouteEditPostsComponent implements OnInit {
  posts: IPost[];
  
  constructor(private _postService: PostService) {
    this._postService.getAll().subscribe(response => {
      this.posts = response;
    });
  }

  ngOnInit() {
  }

}
