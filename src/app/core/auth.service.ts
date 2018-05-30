import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { IUser } from '../common/iuser';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import 'rxjs/add/operator/switchMap';

@Injectable()
export class AuthService {
  user: Observable<IUser>;

  constructor(
    private _af: AngularFirestore,
    private _afAuth: AngularFireAuth,
    private _router: Router
  ) {
      this.user = this._afAuth.authState
        .switchMap(user => {
          if (user) {
            return this._af.doc<IUser>(`users/${user.uid}`).valueChanges();
          } else {
            return Observable.of(null);
          }
        });
  }

  googleLogin(redirect: boolean) {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider, redirect);
  }
  oAuthLogin(provider, redirect) {
    return this._afAuth.auth.signInWithPopup(provider)
    .then(credential => {
      this.updateUserData(credential.user);
    })
    .then(() => {
      if (redirect) {
        this._router.navigate(['/']);
      }
    });
  }
  updateUserData(user) {
    const userRef: AngularFirestoreDocument<IUser> = this._af.doc(`users/${user.uid}`);

    const data: IUser = {
      userId: user.uid,
      email: user.email,
      username: user.displayName,
      photoUrl: user.photoURL,
      createdDate: new Date()

    };
    return userRef.set(data, { merge: true });
  }
  getCurrentUser() {
    return this._afAuth.auth.currentUser;
  }
  signOut() {
    this._afAuth.auth.signOut().then(() => {
      this._router.navigate(['/']);
    });
  }
}
