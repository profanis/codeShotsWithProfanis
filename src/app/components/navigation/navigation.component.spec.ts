import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationComponent, RouterTestingModule],
    }).compileComponents();
    fixture = TestBed.createComponent(NavigationComponent);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have three menu items', () => {
    const links = fixture.debugElement.queryAll(By.directive(RouterLink));
    const routerLinks = links.map((it) => it.injector.get(RouterLink));
    fixture.detectChanges();
    expect(routerLinks.length).toBe(2);
    expect(routerLinks[0].href).toBe('/');
    expect(routerLinks[1].href).toBe('/products');
  });
});
