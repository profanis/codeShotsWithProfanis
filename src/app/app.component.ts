import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecipesComponent } from './features/recipes/recipes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RecipesComponent],
})
export class AppComponent {
  title = 'Code Shots With Profanis - Like and Subscribe :)';
}
