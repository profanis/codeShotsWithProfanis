import { By } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import {
  SpectacularFeatureHarness,
  createFeatureHarness,
} from '@ngworker/spectacular';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products.component';
/**
 * Routing Component
 */
describe('ProductsComponent', () => {
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

  it('should navigate to product details page', async () => {
    // Arrange (query the DOM for the first routerLink element)
    const linkItems = harness.rootFixture.debugElement.queryAll(
      By.directive(RouterLink)
    );
    // Act (click the first routerLink element)
    linkItems[0].triggerEventHandler('click', {
      button: 0,
    });

    await harness.rootFixture.whenStable();

    // Assert (check the URL)
    expect(harness.location.path()).toBe('~/1');
  });
});
