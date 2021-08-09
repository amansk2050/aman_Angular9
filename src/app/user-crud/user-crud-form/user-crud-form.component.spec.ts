import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCrudFormComponent } from './user-crud-form.component';

describe('UserCrudFormComponent', () => {
  let component: UserCrudFormComponent;
  let fixture: ComponentFixture<UserCrudFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCrudFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCrudFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
