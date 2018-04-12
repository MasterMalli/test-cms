import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable()
export class PostService extends DataService {
  constructor(
    protected _http: HttpClient,
    protected _af: AngularFirestore) {
      super('posts', _http, _af);
  }
}
