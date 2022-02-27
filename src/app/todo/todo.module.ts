import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { TodoState } from './todo-state';
import { NgxsModule } from '@ngxs/store';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    RouterModule.forChild([
      {
        path: '',
        component: TodoListComponent,
      },
    ]),
    NgxsModule.forFeature([TodoState]),
  ],
  exports: [TodoListComponent],
})
export class TodoModule {}
