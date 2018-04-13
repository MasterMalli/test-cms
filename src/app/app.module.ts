import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SubmitPostComponent } from './submit-post/submit-post.component';
import { RoutePostsComponent } from './route-posts/route-posts.component';
import { RouteHomeComponent } from './route-home/route-home.component';
import { RouteEditPostsComponent } from './route-edit-posts/route-edit-posts.component';
import { EditablePostListComponent } from './editable-post-list/editable-post-list.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { CoreModule } from './core/core.module';
// import { TinymceModule } from 'angular2-tinymce';

import { PostService } from './services/post.service';
import { DataService } from './services/data.service';
import { TopPanelComponent } from './top-panel/top-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmitPostComponent,
    RoutePostsComponent,
    RouteHomeComponent,
    RouteEditPostsComponent,
    EditablePostListComponent,
    TopPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    EditorModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule
    // TinymceModule.withConfig({
    //   plugins: ['emoticons image imagetools table paste'],
    //   toolbar: 'emoticons | formatselect'
    //   // paste_text_sticky : true,
    // })
  ],
  providers: [
    AngularFirestore,
    PostService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
