import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutePostsComponent } from './route-posts/route-posts.component';
import { RouteHomeComponent } from './route-home/route-home.component';
import { RouteEditPostsComponent } from './route-edit-posts/route-edit-posts.component';
import { RouteLoginComponent } from './route-login/route-login.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  { path: '', component: RouteHomeComponent },
  { path: 'posts', component: RoutePostsComponent },
  { path: 'edit-posts', component: RouteEditPostsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: RouteLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
