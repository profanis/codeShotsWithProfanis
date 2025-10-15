import { Component, input, model } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Control, Field } from '@angular/forms/signals';
import { ScopeOfWorkFormModel } from '../../pages/contract-form/contract-form.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-scope-of-work',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    Control,
    FormsModule,
    MatCardModule,
  ],
  templateUrl: './scope-of-work.component.html',
  styleUrl: './scope-of-work.component.scss',
})
export class ScopeOfWorkComponent {
  scopeOfWork = input.required<Field<ScopeOfWorkFormModel>>();

  addDeliverable() {
    this.scopeOfWork()
      .deliverables()
      .value.update((current) => [
        ...current, { name: '', description: '' }
      ]);
  }

  removeDeliverable(index: number) {
    this.scopeOfWork()
      .deliverables()
      .value.update((current) => current.filter((_, i) => i !== index));
  }

  addMilestone() {
    this.scopeOfWork()
      .milestones()
      .value.update((current) => [
        ...current,
        { description: '', date: new Date() },
      ]);
  }

  removeMilestone(index: number) {
    this.scopeOfWork()
      .milestones()
      .value.update((current) => current.filter((_, i) => i !== index));
  }
}
