import { Component, Input } from '@angular/core';
import { IPost } from '../common/ipost';
import { PostService } from '../services/post.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'editable-post-list',
  templateUrl: './editable-post-list.component.html',
  styleUrls: ['./editable-post-list.component.css']
})
export class EditablePostListComponent {
  @Input('posts') posts: IPost[];
  editMode: any = {};

  constructor(private _postService: PostService, private _sanitizer: DomSanitizer) { } // need to sanitise

  delete(post) {
    console.log('Deleting...');
    this._postService.delete(post);
  }
  edit(post) {
    this.editMode[post.postId] = !this.editMode[post.postId];
  }
  editPost(post) {
    console.log(post);
    this._postService.update(post);
    this.editMode[post.postId] = !this.editMode[post.postId];
  }
  cancelEdit(postId) {
    const index = this.posts.findIndex(p => p.postId === postId);
    console.log(`## ORIGINAL INPUT ## ${this.returnTitleAndBody(index)}`);

    this._postService.get(postId).subscribe(response => {
      if (!response) {
        return console.log('nothing to show: ' + response);
      } else {
        this.posts[index].title = response.title;
        this.posts[index].body = response.body;
        console.log(`## REVERTED BACK TO ## ${this.returnTitleAndBody(index)}`);
      }
    });
    this.editMode[postId] = !this.editMode[postId];
  }

  returnTitleAndBody(index) {
    return `\nTitle: ${this.posts[index].title}\nBody: ${this.posts[index].body}`;
  }
}
