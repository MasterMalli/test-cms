import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Post } from './submit-post/submit-post.component'

@Injectable()
export class PostService {
  private _itemsCollection: AngularFirestoreCollection<Post>;
  private _item: AngularFirestoreDocument<Post>;
  private _postId;

  constructor(private _http: HttpClient, private _af: AngularFirestore) { }

  getAll(){
    this._itemsCollection = this._af.collection<Post>('posts', ref => { // stop after 'posts' to leave filters out
      return ref.limit(7).orderBy('date', "desc");
    }); // Reference to the collection
    return this._itemsCollection.valueChanges(); // Getting the observable "raw data" from the collection reference
  }
  get(id){
    this._item = this._af.doc<Post>(`posts/${id}`);
    return this._item.valueChanges();
  }
  submit(post){
    this._af.collection('posts')
      .add(post)
      .then(ref => {
        console.log('Added post with ID: ', ref.id);
        this._postId = ref.id;
      })
      .then(() => {
        this._af.doc(`posts/${this._postId}`).update({postId: this._postId})
      });
  }
  delete(post: Post){
    this._item = this._af.doc<Post>(`posts/${post.postId}`);
    this._item.delete()
      .then(() => {
        console.log(`Message deleted with ID: ${post.postId}`);
      })
      .catch(err => {
        console.log(`An error occurred: ${err}`);
      });
  }
}
