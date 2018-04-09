import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutePostsComponent } from './route-posts.component';

describe('RoutePostsComponent', () => {
  let component: RoutePostsComponent;
  let fixture: ComponentFixture<RoutePostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutePostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
