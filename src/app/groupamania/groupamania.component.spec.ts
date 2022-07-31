import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupamaniaComponent } from './groupamania.component';

describe('GroupamaniaComponent', () => {
  let component: GroupamaniaComponent;
  let fixture: ComponentFixture<GroupamaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupamaniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupamaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
