import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditablePostListComponent } from './editable-post-list.component';

describe('EditablePostListComponent', () => {
  let component: EditablePostListComponent;
  let fixture: ComponentFixture<EditablePostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditablePostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditablePostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
