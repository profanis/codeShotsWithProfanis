import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-widget-one',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>widget-one</h2>
    Name: {{ name }}
  `,
  styleUrls: ['./widget-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetOneComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes are happen');
  }
  @Input() name: string | undefined;
}
