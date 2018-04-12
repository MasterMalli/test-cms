import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  private _itemsCollection: AngularFirestoreCollection<any>;
  private _item: AngularFirestoreDocument<any>;
  private _resourceId;

  constructor(
    private _url: string,
    protected _http: HttpClient,
    protected _af: AngularFirestore) { }

  create(resource) {
    this._af.collection(this._url)
      .add(resource)
      .then(ref => {
        console.log('Added post with ID: ', ref.id);
        this._resourceId = ref.id;
      })
      .then(() => {
        this._af.doc(`${this._url}/${this._resourceId}`).update({ postId: this._resourceId });
      });
  }
  getAll() {
    this._itemsCollection = this._af.collection(this._url, ref => { // stop after 'posts' to leave filters out
      return ref.limit(7).orderBy('date', 'desc');
    }); // Reference to the collection
    return this._itemsCollection.valueChanges(); // Getting the observable "raw data" from the collection reference
  }
  get(id) {
    this._item = this._af.doc(`${this._url}/${id}`);
    return this._item.valueChanges();
  }
  update(resource) {
    this._item = this._af.doc(`${this._url}/${resource.postId}`);
    this._item.update(resource)
      .then(response => {
        if (response) {
          console.log(`Post updated: ${response}`);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  delete(resource) {
    this._item = this._af.doc(`${this._url}/${resource.postId}`);
    this._item.delete()
      .then(() => {
        if (!resource.postId) {
          console.log(`Error - message not deleted.`);
        } else {
          console.log(`Message deleted with ID: ${resource.postId}`);
        }
      })
      .catch(err => {
        console.log(`An error occurred: ${err}`);
      });
  }
}
