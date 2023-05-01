import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { Router, RouterLink, provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { of } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { ProductsComponent } from './products.component';

/**
 * Routing Component
 */
describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let harness: RouterTestingHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsComponent],
      providers: [
        provideRouter([
          {
            path: '**',
            component: ProductsComponent,
          },
        ]),
        {
          provide: ProductsService,
          useValue: {
            get: () => {
              const products = [...new Array(10)].map((it, index) => ({
                id: index + 100,
                name: `Product ${index + 1}`,
                price: 100,
                description: `This is product ${index + 1}`,
              }));
              return of(products);
            },
          },
        },
      ],
    }).compileComponents();

    harness = await RouterTestingHarness.create();
    component = await harness.navigateByUrl('/products', ProductsComponent);
  });

  it('should navigate to product details page', fakeAsync(async () => {
    // Arrange (query the DOM for the first routerLink element)
    const navItems = harness.routeDebugElement?.queryAll(
      By.directive(RouterLink)
    );

    // Act (click the first routerLink element)
    navItems![0].triggerEventHandler('click', {
      button: 0,
    });

    // The router is asynchronous, so we need to wait for it to finish
    tick();

    // Assert (check the URL)
    expect(TestBed.inject(Router).url).toBe(`/products/100`);
  }));
});
