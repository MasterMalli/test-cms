import { Component, Input } from '@angular/core';
import { IPost } from '../submit-post/submit-post.component';
import { PostService } from '../post.service';

@Component({
  selector: 'editable-post-list',
  templateUrl: './editable-post-list.component.html',
  styleUrls: ['./editable-post-list.component.css']
})
export class EditablePostListComponent {
  @Input('posts') posts: IPost[];
  constructor(private _postService: PostService) { }

  delete(post){
    console.log("Deleting...");
    this._postService.delete(post);
  }

}
