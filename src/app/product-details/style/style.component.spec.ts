import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleComponent } from './style.component';

describe('StyleComponent', () => {
  let component: StyleComponent;
  let fixture: ComponentFixture<StyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
