import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteEditPostsComponent } from './route-edit-posts.component';

describe('RouteEditPostsComponent', () => {
  let component: RouteEditPostsComponent;
  let fixture: ComponentFixture<RouteEditPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteEditPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteEditPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
