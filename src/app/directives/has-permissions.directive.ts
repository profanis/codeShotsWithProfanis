import {
  Directive,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appHasPermissions]',
  standalone: true,
})
export class HasPermissionsDirective implements OnInit {
  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    const user = {
      username: 'profanis',
      permissions: ['read'],
    };

    this.viewContainerRef.clear();
    this.viewContainerRef.createEmbeddedView(this.templateRef, {
      canRead: user.permissions.includes('read'),
      canWrite: user.permissions.includes('write'),
    });
  }
}
