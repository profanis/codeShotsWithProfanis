import { JsonPipe, NgIf, NgTemplateOutlet } from '@angular/common';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-user-card',
  imports: [JsonPipe, NgIf, NgTemplateOutlet],
  template: `
    <p>user-card works!</p>
    <p>{{ user | json }}</p>
    <p>{{ isEnabled }}</p>
    <div style="border: 1px solid red;">
      <ng-container *ngIf="cardContentTemplate">
        <ng-templateOutlet [ngTemplateOutlet]="cardContentTemplate"/>
      </ng-container>
    </div>

  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {
  @Input() user: User | undefined = undefined;
  @Input({
    required: true,
    transform: booleanAttribute,
  })
  isEnabled: boolean = false;
  @Output('userChanged') userChange = new EventEmitter();
  @ContentChild('cardContent', {read: TemplateRef}) cardContentTemplate: TemplateRef<any> | undefined;

  methodThatDoesSomething() {
    this.userChange.emit();
  }
}
