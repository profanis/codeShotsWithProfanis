import { Component, inject, viewChildren } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CardSkeletonComponent } from './components/card-skeleton.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { LazyComponent } from './components/lazy.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    LazyComponent,
    NavigationComponent,
    MatButtonModule,
    CardSkeletonComponent,
  ],
})
export class AppComponent {
  title = `
          Code Shots With Profanis
            Like and Subscribe!
          `;

  lazyComponents = viewChildren(LazyComponent);

  dialog = inject(MatDialog);
  lazyItems = Array.from({ length: 24 });

  logLazyComponents(): void {
    if (this.lazyComponents()?.length) {
      this.dialog.open(DialogComponent, {
        data: { length: this.lazyComponents().length },
      });
    }
  }
}
