import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllPostComponent } from './admin-all-post.component';

describe('AdminAllPostComponent', () => {
  let component: AdminAllPostComponent;
  let fixture: ComponentFixture<AdminAllPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAllPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
