import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Post } from './submit-post/submit-post.component'

@Injectable()
export class PostService {
  private _itemsCollection: AngularFirestoreCollection<Post>;
  private _item: AngularFirestoreDocument<Post>;

  constructor(private _http: HttpClient, private _af: AngularFirestore) { }

  getAll(){
    this._itemsCollection = this._af.collection<Post>('posts', ref => { // stop after 'posts' to leave filters out
      return ref.limit(3);
    }); // Reference to the collection
    return this._itemsCollection.valueChanges(); // Getting the observable "raw data" from the collection reference
  }
  get(id){
    this._item = this._af.doc<Post>('posts/' + id);
    return this._item.valueChanges();
  }
  submit(request){
    this._af.collection('posts')
      .add(request)
      .then(ref => {
        console.log('Added post with ID: ', ref.id);
      });
  }
}
