import { Component, linkedSignal, signal, WritableSignal } from '@angular/core';
import { AccordionComponent } from './accordion/accordion.component';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

export type Item = { id: number; name: string };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    // BooksComponent,
    AccordionComponent,
    FormsModule,
    JsonPipe,
    MatFormField,
    MatLabel,
    MatSelect,
    MatOption,
    MatButtonModule,
  ],
})
export class AppComponent {
  title = 'Code Shots With Profanis - Like and Subscribe :)';

  signalValueA = signal(1);
  signalValueB = signal(2);

  computedValue = linkedSignal<{ source: number; source2: number }, number>({
    source: () => ({
      source: this.signalValueA(),
      source2: this.signalValueB(),
    }),
    computation: ({ source, source2 }) => source + source2,
  });

  listOfItems: WritableSignal<Item[]> = signal([
    { id: 1, name: 'item 1' },
    { id: 2, name: 'item 2' },
    { id: 3, name: 'item 3' },
  ]);

  // selectedItem = signal<Item | null>(null);
  selectedItem = linkedSignal<Item[], Item | null>({
    source: this.listOfItems,
    computation: (items, previous) =>
      items.find((item) => item.id === previous?.value?.id) || null,
  });

  changeTheItemsIncludingTheDefaultOnes() {
    this.listOfItems.set([
      { id: 1, name: 'item 1' },
      { id: 2, name: 'item 2' },
      { id: 3, name: 'item 3' },
      { id: 4, name: 'item 4' },
      { id: 5, name: 'item 5' },
    ]);
  }

  changeTheItemsExcludingTheDefaultOnes() {
    const counter = signal(0);
    counter.set(1);
    counter.update((existingValue) => existingValue + 1);

    this.listOfItems.set([
      { id: 4, name: 'item 4' },
      { id: 5, name: 'item 5' },
    ]);
  }
}
