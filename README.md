# Code Shots With Profanis

## ng g @angular/core:control-flow

_Available from Angular 17_

> Should the migration reformat your templates? **yes**

## ng g @angular/core:inject

_Available from Angular 18_

> Do you want to migrate abstract classes? Abstract classes are not migrated by default, because their parameters aren't guaranteed to be injectable
> **yes**

By default the abstract classes are not migrated since angular doesn't know if the constructor arguments are injectable. If we enable this option, we risk having compilation errors.
Note: these errors might get fixed if we enable the next option.

> Do you want to clean up all constructors or keep them backwards compatible? Enabling this option will include an additional signature of `constructor(...args: unknown[]);` that will avoid errors for sub-classes, but will increase the amount of generated code by the migration
> **yes**

By default this generator removes constructor parameters and even removes the constructors. If we enable this flag, angular will introduce a `constructor(...args: unknown[])` for backwards compatibility. Enabling this option, solves the issues we might have with the abstract classes

> Do you want optional inject calls to be non-nullable? Enable this option if you want the return type to be identical to `@Optional()`, at the expense of worse type safety
> **yes**

Angular return `null` if the injection of the `@Optional` parameter fail. However, since the decorators cannot influence their type, there are many cases where the types are wrong. We make them wrong.

The correct approach to use the `@Optional` decorator is to have `| null` on the type.

```ts
@Inject(MY_TOKEN) @Optional() private readonly token: MyToken | null // Note the | null
```

However, this might be

```ts
@Inject(MY_TOKEN) @Optional() private readonly token: MyToken // | null is missing
```

if we enable this prompt, the return type is non-nullable which matches the "wrong" type of the `@Optional` decorator

Having this flag, the migrated code becomes

```ts
  private readonly token = inject<MyToken>(MY_TOKEN, { optional: true })!; // Note the exclamation mark

  // The type is MyToken
```

without the flag, the migrated code becomes

```ts
  private readonly token = inject<MyToken>(MY_TOKEN, { optional: true }); // The exclamation mark is missing

  // The type is MyToken | null
```

## ng g @angular/core:route-lazy-loading

_Available from Angular 18_

This generator converts the eager loading routes into lazy loading routes. It also handles the components that are exported as default

Having this component

```ts
@Component({ ... })
export class ProductsComponent {}
```

and this route configuration

```ts
provideRouter([
  {
    path: 'products',
    component: ProductsComponent,
  },
]),
```

the route config becomes

```ts
provideRouter([
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent),
  },
]),
```

If however the component is exported as default

```ts
@Component({ ... })
export default class ProductsComponent {}
```

the route config becomes

```ts
provideRouter([
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.component'),
  },
]),
```

> note: it will also migrate the RouterModule configuration. The migration will be based on RouterModule but with lazy loading routes. It is highly encouraged to migrate to a standalone application and run this migration again.

## ng g @angular/core:signal-input-migration

_Available from Angular 19_

Showcase how to migrate using the VSCode refactoring (click the lamp icon)

Having this input

```ts
@Input({
  required: true,
  transform: booleanAttribute,
})
```

becomes to:

```ts
readonly isEnabled = input.required<boolean, unknown>({ transform: booleanAttribute });
```

Note: The input.required has two generic types. The first one (`boolean`) is the actual type of the input. As such, isEnabled is type of boolean.

The second generic type is the input type. In the example below, the input type is string, so, it would be safe also to replace `unknown` with `string`. However, angular at the time of migration safely uses the `unknown` since the type is not known and eventually will be narrowed down through type assertions or type guards.

```html
<app-user-card isEnabled="true" />
```

---

Having this input

```ts
@Input() user: User | undefined = undefined;
```

becomes to

```ts
readonly user = input<User>();
```

Note: The type of the input decorator was `User | undefined` while the type of the signal input is `User`. The reason is that the signal input inputs are by default nullable and the default value is `undefined`. As such, the returned type is `InputSignal<User | undefined>`

## ng g @angular/core:output-migration

_Available from Angular 19_

The migration of the Output decorator is straight forward.

```ts
@Output('userChanged') userChange = new EventEmitter();
```

```ts
readonly userChange = output({ alias: 'userChanged' });
```

## ng g @angular/core:signal-queries-migration

_Available from Angular 19_

This migration converts the `@ViewChild` `@ViewChildren` `@ContentChild` and `@ContentChildren` to `viewChild`, `viewChildren`, `contentChild` and `contentChildren` signal queries respectively

Before

```ts
@ViewChild(UserCardComponent) userCard!: UserCardComponent;
@ViewChildren(UserCardComponent) userCards!: QueryList<UserCardComponent>;
```

After

```ts
readonly userCard = viewChild.required(UserCardComponent);
readonly userCards = viewChildren(UserCardComponent);
```
