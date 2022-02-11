import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailListComponent } from './userdetail-list.component';

describe('UserdetailListComponent', () => {
  let component: UserdetailListComponent;
  let fixture: ComponentFixture<UserdetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
