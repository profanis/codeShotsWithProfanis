import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  exportAs: 'app-product',
})
export class ProductComponent {
  isButtonClicked = false;

  private isPrivate = false;

  constructor(private _snackBar: MatSnackBar) {}

  buyProduct() {
    this.isButtonClicked = true;
    this._snackBar.open('The product added to the basket', 'OK');
  }
}
