import { AdminPagePosteComponent } from './admin-page-poste.component';

import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('AminPagePosteComponent', () => {
  let component: AdminPagePosteComponent;
  let fixture: ComponentFixture<AdminPagePosteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPagePosteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPagePosteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
