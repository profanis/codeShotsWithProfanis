import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      user-details works!
    </p>
  `,
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
