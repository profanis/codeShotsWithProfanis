import {
  ChangeDetectionStrategy,
  Component,
  input,
  linkedSignal,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-accordion',
  template: `
    <div class="accordion">
      <div
        (click)="toggle()"
        [class.chevron-down]="!state()"
        [class.chevron-up]="state()"
      >
        {{ state() ? 'Close' : 'Open' }} Accordion
      </div>
      @if (state()) {
        <div class="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      }
    </div>
  `,
  styles: `
    .accordion {
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 10px;
      width: 150px;
      position: relative;
    }
    .content {
      margin-top: 10px;
    }

    .chevron-down::after,
    .chevron-up::after {
      position: absolute;
      right: 10px;
    }

    .chevron-down::after {
      content: '▼';
    }
    .chevron-up::after {
      content: '▲';
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
  readonly isOpen = input(false);

  state = linkedSignal(this.isOpen);

  toggle() {
    this.state.set(!this.state());
  }
}
