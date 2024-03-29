import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPostComponent } from './general-post.component';

describe('GeneralPostComponent', () => {
  let component: GeneralPostComponent;
  let fixture: ComponentFixture<GeneralPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
