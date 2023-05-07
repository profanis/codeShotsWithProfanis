import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { Router, RouterLink, provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products.component';

/**
 * Routing Component
 */
describe('ProductsComponent', () => {
  let component: ProductsComponent;
  // let fixture: ComponentFixture<ProductsComponent>;
  let harness: RouterTestingHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsComponent],
      providers: [
        provideRouter([
          {
            path: 'products',
            component: ProductsComponent,
          },
          {
            path: 'products/:id',
            component: ProductDetailComponent,
          },
        ]),
      ],
    }).compileComponents();

    // fixture = TestBed.createComponent(ProductsComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();

    harness = await RouterTestingHarness.create();
    component = await harness.navigateByUrl('/products', ProductsComponent);
  });

  it('should navigate to product details page', fakeAsync(() => {
    // Arrange (query the DOM for the first routerLink element)
    const linkItems = harness.routeDebugElement?.queryAll(
      By.directive(RouterLink)
    );

    // Act (click the first routerLink element)
    linkItems![0].triggerEventHandler('click', {
      button: 0,
    });

    tick();

    // Assert (check the URL)
    expect(TestBed.inject(Router).url).toBe('/products/1');
  }));
});
