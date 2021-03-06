import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  declarations: [],
  providers: [AuthService]
})
export class CoreModule { }
