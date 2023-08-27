import { fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  createFeatureHarness,
  SpectacularFeatureHarness,
} from '@ngworker/spectacular';
import { ProductsComponent } from '../products.component';
import { ProductDetailComponent } from './product-detail.component';

/**
 * Routed Component
 */
describe('ProductDetailComponent', () => {
  let harness: SpectacularFeatureHarness;
  beforeEach(() => {
    harness = createFeatureHarness({
      featurePath: 'products',
      routes: [
        {
          path: 'products',
          component: ProductsComponent,
        },
        {
          path: 'products/:id',
          component: ProductDetailComponent,
        },
      ],
    });
  });

  it('should have the correct productId from the route', async () => {
    // Arrange (navigate to the product detail page)
    await harness.router.navigate(['~', '1']);

    // Act (get the active component)
    const component =
      harness.rootComponent.getActiveComponent<ProductDetailComponent>();

    // Assert (check the productId)
    expect(component.productId.toString()).toBe('1');
  });

  it('should navigate back to products list if the provided productId is wrong', async () => {
    // Arrange (navigate to the product detail page with an invalid productId)
    await harness.router.navigate(['~', '100']);

    // Assert (check the URL)
    expect(harness.location.path()).toBe('~/');
  });

  it('should click back to products and go to the list', fakeAsync(async () => {
    // Arrange (navigate to the product detail page)
    await harness.router.navigate(['~', '1']);

    // Act (click the back to products button)
    const element = harness.rootFixture.debugElement.query(
      By.css('[data-test="back-to-products"]')
    );
    element.triggerEventHandler('click');
    await harness.rootFixture.whenStable();

    // Assert (check the URL)
    expect(harness.location.path()).toBe('~/');
  }));
});
