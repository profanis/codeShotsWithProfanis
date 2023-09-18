import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLink, provideRouter } from '@angular/router';
import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct menu items', () => {
    const linkItems = fixture.debugElement.queryAll(By.directive(RouterLink));
    const navItems = linkItems.map((it) => it.injector.get(RouterLink));

    expect(navItems.length).toBe(2);
    expect(navItems[0].href).toBe('/');
    expect(navItems[1].href).toBe('/products');
  });
});
