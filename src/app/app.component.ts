import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { BaseNodeComponent } from './components/base-node.component';
import { ParentComponent } from './components/signal-inputs/signal-inputs.component';
import { ThreeComponent } from './components/three.component';
import { TwoComponent } from './components/two.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [TwoComponent, ThreeComponent, ParentComponent],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent extends BaseNodeComponent {
  title = 'Code Shots With Profanis - Like and Subscribe :)';
}
