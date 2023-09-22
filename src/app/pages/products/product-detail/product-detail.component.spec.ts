import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { Router, provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { ProductsComponent } from '../products.component';
import { ProductDetailComponent } from './product-detail.component';

/**
 * Routed Component
 */
describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let harness: RouterTestingHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailComponent],
      providers: [
        provideRouter([
          {
            path: 'products/:id',
            component: ProductDetailComponent,
          },
          {
            path: 'products',
            component: ProductsComponent,
          },
        ]),
      ],
    }).compileComponents();

    // fixture = TestBed.createComponent(ProductDetailComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
    harness = await RouterTestingHarness.create();
  });

  it('should have the correct productId from the route', async () => {
    const component = await harness.navigateByUrl(
      'products/1',
      ProductDetailComponent
    );

    expect(component.productId.toString()).toBe('1');
  });

  it('should navigate back to products list if the provided productId is wrong', async () => {
    await harness.navigateByUrl('products/11');

    expect(TestBed.inject(Router).url).toBe('/products');
  });

  it('should click back to products and go to the list', fakeAsync(async () => {
    const component = await harness.navigateByUrl(
      'products/1',
      ProductDetailComponent
    );

    const element = harness.routeDebugElement?.query(
      By.css('[data-test="back-to-products"')
    );

    element?.triggerEventHandler('click');
    tick();

    expect(component.productId.toString()).toBe('1');
    expect(TestBed.inject(Router).url).toBe('/products');
  }));
});
