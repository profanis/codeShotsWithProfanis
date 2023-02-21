import {
  Directive,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

export interface HasPermissionContext {
  $implicit: {
    canRead: boolean;
    canWrite: boolean;
  };
}

@Directive({
  selector: '[appHasPermissions]',
  standalone: true,
})
export class HasPermissionsDirective implements OnInit {
  constructor(
    private templateRef: TemplateRef<HasPermissionContext>,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    const user = {
      username: 'profanis',
      permissions: ['read'],
    };

    this.viewContainerRef.clear();
    this.viewContainerRef.createEmbeddedView<HasPermissionContext>(
      this.templateRef,
      {
        $implicit: {
          canRead: user.permissions.includes('read'),
          canWrite: user.permissions.includes('write'),
        },
      }
    );
  }

  static ngTemplateContextGuard(
    dir: HasPermissionsDirective,
    context: HasPermissionContext
  ): context is HasPermissionContext {
    return true;
  }
}
