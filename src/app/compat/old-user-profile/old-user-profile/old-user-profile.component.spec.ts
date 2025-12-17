import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldUserProfileComponent } from './old-user-profile.component';

describe('OldUserProfileComponent', () => {
  let component: OldUserProfileComponent;
  let fixture: ComponentFixture<OldUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OldUserProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
