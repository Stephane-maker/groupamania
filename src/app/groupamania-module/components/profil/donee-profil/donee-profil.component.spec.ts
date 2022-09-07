import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneeProfilComponent } from './donee-profil.component';

describe('DoneeProfilComponent', () => {
  let component: DoneeProfilComponent;
  let fixture: ComponentFixture<DoneeProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoneeProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoneeProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
