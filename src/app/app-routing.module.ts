import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutePostsComponent } from './route-posts/route-posts.component';
import { RouteHomeComponent } from './route-home/route-home.component';

const routes: Routes = [
  { path: '', component: RouteHomeComponent },
  { path: 'posts', component: RoutePostsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
