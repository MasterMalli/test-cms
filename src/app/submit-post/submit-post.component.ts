import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../post.service';

export interface IPost {
  title: string;
  body: string;
  postId?: string;
  date?: Date;
}

@Component({
  selector: 'submit-post',
  templateUrl: './submit-post.component.html',
  styleUrls: ['./submit-post.component.css']
})
export class SubmitPostComponent {
  @Input('posts') posts: IPost[];

  displaySent = false;
  contactForm: FormGroup;
  post: IPost;
  // blank: string = " ";

  constructor(private _postService: PostService) {
    this.contactForm = new FormGroup({
      title: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required)
    });

    this._postService.getAll().subscribe(response => {
      this.posts = response;
    });
  }

  onSubmit() {
    const { title, body } = this.contactForm.value;
    const date = Date.now();

    let formRequest = { date: new Date(), title, body };

    this._postService.create(formRequest);
    this.contactForm.reset();
    this.displaySent = !this.displaySent;
  }

  get title() { return this.contactForm.get('title'); }
  get body() { return this.contactForm.get('body'); }
}
