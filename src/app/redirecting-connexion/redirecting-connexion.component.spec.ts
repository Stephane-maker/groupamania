import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectingConnexionComponent } from './redirecting-connexion.component';

describe('RedirectingConnexionComponent', () => {
  let component: RedirectingConnexionComponent;
  let fixture: ComponentFixture<RedirectingConnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedirectingConnexionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedirectingConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
