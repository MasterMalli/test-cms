import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { IPost } from '../common/ipost';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'submit-post',
  templateUrl: './submit-post.component.html',
  styleUrls: ['./submit-post.component.css']
})
export class SubmitPostComponent {
  @Input('posts') posts: IPost[];

  displaySent = false;
  contactForm: FormGroup;
  post: IPost;

  constructor(private _postService: PostService) {
    this.contactForm = new FormGroup({
      title: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    const { title, body } = this.contactForm.value;
    const date = Date.now();

    const formRequest = { date: new Date(), title, body };

    this._postService.create(formRequest);
    this.contactForm.reset();
    this.body.setValue('');
    this.displaySent = !this.displaySent;
  }

  get title() { return this.contactForm.get('title'); }
  get body() { return this.contactForm.get('body'); }
}
