import { Component, Input } from '@angular/core';
import { IPost } from '../submit-post/submit-post.component';
import { PostService } from '../post.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'editable-post-list',
  templateUrl: './editable-post-list.component.html',
  styleUrls: ['./editable-post-list.component.css']
})
export class EditablePostListComponent {
  @Input('posts') posts: IPost[];
  editMode: any = {};
  blank: string = " ";

  constructor(private _postService: PostService, private _sanitizer: DomSanitizer) { } // need to sanitise

  delete(post){
    console.log("Deleting...");
    this._postService.delete(post);
  }
  edit(post){
    this.editMode[post.postId] = !this.editMode[post.postId];
  }
  editPost(post){
    console.log(post);
    this._postService.update(post);
    this.editMode[post.postId] = !this.editMode[post.postId];    
  }

}
