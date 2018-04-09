import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SubmitPostComponent } from './submit-post/submit-post.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RoutePostsComponent } from './route-posts/route-posts.component';
import { RouteHomeComponent } from './route-home/route-home.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { TinymceModule } from 'angular2-tinymce';
import { PostService } from './post.service';


@NgModule({
  declarations: [
    AppComponent,
    SubmitPostComponent,
    RoutePostsComponent,
    RouteHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    EditorModule,
    AngularFireModule.initializeApp(environment.firebase),
    TinymceModule.withConfig({
      plugins: ['emoticons image imagetools table'],
      toolbar: 'emoticons | formatselect'
    })
  ],
  providers: [
    AngularFirestore,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
