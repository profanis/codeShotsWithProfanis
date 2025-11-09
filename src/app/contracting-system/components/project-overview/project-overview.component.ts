import {
  Component,
  input,
  InputSignal,
  model,
  ModelSignal,
  OutputRef,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {
  Field,
  FieldTree,
  form,
  FormUiControl,
  FormValueControl,
} from '@angular/forms/signals';
import { ProjectOverviewFormModel } from '../../pages/contract-form/contract-form.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-project-overview',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    Field,
    MatCardModule,
  ],
  templateUrl: './project-overview.component.html',
  styleUrl: './project-overview.component.scss',
})
export class ProjectOverviewComponent {
  projectOverview = input.required<FieldTree<ProjectOverviewFormModel>>();
}
