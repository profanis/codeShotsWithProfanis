import { JsonPipe, NgIf, NgTemplateOutlet } from '@angular/common';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  HostBinding,
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
    <p>isEnabled: {{ isEnabled }}</p>
    <div style="border: 1px solid red;">
      <ng-container *ngIf="cardContentTemplateUsedWithIfCondition">
        <ng-templateOutlet
          [ngTemplateOutlet]="cardContentTemplateUsedWithIfCondition"
        />
      </ng-container>

      <ng-templateOutlet [ngTemplateOutlet]="cardContentTemplate" />
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

  @Input() isEdit: boolean = false;

  @Output('userChanged')
  userChange = new EventEmitter();

  @HostBinding('class.my-custom-class')
  @ContentChild('cardContent', { read: TemplateRef })
  cardContentTemplateWithHostBinding: TemplateRef<any> | undefined;

  @ContentChild('cardContent', { read: TemplateRef })
  set cardContentTemplateAsSet(value: TemplateRef<any> | undefined) {
    console.log('cardContentTemplateAsSet', value);
  }

  @ContentChild('cardContent', { read: TemplateRef })
  cardContentTemplateUsedWithIfCondition: TemplateRef<any> | undefined;

  @ContentChild('cardContent', { read: TemplateRef })
  cardContentTemplate!: TemplateRef<any>;

  methodThatDoesSomething() {
    this.userChange.emit();
  }

  methodThatEditsTheInput() {
    this.isEdit = false;
  }
}
