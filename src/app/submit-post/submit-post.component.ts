import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../post.service';

export interface Post {
  title: string;
  body: string;
}

@Component({
  selector: 'submit-post',
  templateUrl: './submit-post.component.html',
  styleUrls: ['./submit-post.component.css']
})
export class SubmitPostComponent {
  displaySent = false;
  contactForm: FormGroup;
  posts: Post[];
  post: Post;
  postTitle: string;

  constructor(private _postService: PostService) {
    this.contactForm = new FormGroup({
      title: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    });

    this._postService.getAll().subscribe(response => {
      this.posts = response;
    });
    this._postService.get('WmPOeWGZvgCLS0EqjZBd').subscribe(response => {
      this.post = response;
      this.postTitle = this.post.title;
    })
  }

  onSubmit() {
    const { title, message } = this.contactForm.value;
    const date = Date();

    let formRequest = { date, title, message };

    this._postService.submit(formRequest);
    this.contactForm.reset();
    this.displaySent = !this.displaySent;
  }

  get title() { return this.contactForm.get('title'); }
  get message() { return this.contactForm.get('message'); }
}
