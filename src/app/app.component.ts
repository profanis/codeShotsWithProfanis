import { CommonModule } from '@angular/common';
import { Component, Inject, Optional } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from './services/products.service';
import { MY_TOKEN, MyToken } from './tokens/my-token';
import { UsersComponent } from './pages/users/users.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, UsersComponent],
})
export class AppComponent {
  title = 'Code Shots With Profanis - Like and Subscribe :)';

  isVisible = true;
  color: 'red' | 'blue' | 'green' = 'red';
  items = ['item1', 'item2', 'item3', 'item4', 'item5'];

  constructor(
    private readonly _productsService: ProductsService,
    @Inject(MY_TOKEN) @Optional() private readonly token: MyToken,
  ) {}
}
