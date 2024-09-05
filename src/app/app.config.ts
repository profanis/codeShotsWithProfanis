import { ApplicationConfig, inject } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  provideRouter,
  ResolveFn,
  Router,
  RouterStateSnapshot,
  withDebugTracing,
  withRouterConfig,
} from '@angular/router';
import { AuthService } from './auth.service';
import { ProductsService } from './services/products.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'dashboard',
        },
        // Imagine that we have an application that supports only products.
        // We decided to add a search feature and create a new page for it.
        // While our application grows, we decide to add a new feature to search for users and we are using the same page for it.

        // Sooner or later we realize that this is not a good idea because we have to handle different types of search results on the same page.
        // We decide to create a separate page for each type of search result.
        // The redirectTo is responsible for redirecting to the correct page based on the query parameters.
        {
          path: 'search',
          redirectTo: ({ queryParams, url }) => {
            const type = queryParams['type'];
            const router = inject(Router);
            switch (type) {
              case 'users':
                return 'users';
              case 'products':
                return router.createUrlTree(['products'], {
                  queryParams: { ...queryParams, version: 'v2' },
                });
            }
            return url[0].path;
          },
        },
        {
          path: 'search',
          loadComponent: async () =>
            (await import('./search/search.component')).SearchComponent,
        },
        {
          path: 'products',
          loadComponent: async () =>
            (await import('./products/products.component')).ProductsComponent,
        },
        {
          path: 'users',
          loadComponent: () =>
            import('./users/users.component').then((m) => m.UsersComponent),
        },
        {
          path: 'products/:id',
          loadComponent: async () =>
            (await import('./products/product-detail/product-detail.component'))
              .ProductDetailComponent,
          resolve: {
            product: (activatedRoute: ActivatedRouteSnapshot) => {
              activatedRoute.params;
              const productsService = inject(ProductsService);
              return productsService.getById(activatedRoute.params.id);
            },
          },
        },
        {
          path: 'results',
          loadComponent: () =>
            import(
              './products/products-results/products-results.component'
            ).then((m) => m.ProductsResultsComponent),
        },
        {
          path: 'dashboard',
          loadComponent: () =>
            import('./dashboard/dashboard.component').then(
              (m) => m.DashboardComponent,
            ),
        },
      ],
      withDebugTracing(),
    ),
  ],
};
