import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageDataAdminComponent } from './affichage-data-admin.component';

describe('AffichageDataAdminComponent', () => {
  let component: AffichageDataAdminComponent;
  let fixture: ComponentFixture<AffichageDataAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichageDataAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichageDataAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
