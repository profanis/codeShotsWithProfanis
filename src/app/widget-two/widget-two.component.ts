import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget-two',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>widget-two</h2>
    Name: {{ name }}
  `,
  styleUrls: ['./widget-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetTwoComponent {
  @Input() name: string | undefined;
}
