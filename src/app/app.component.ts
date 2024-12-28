import { CommonModule } from '@angular/common';
import { Component, OnInit, Type } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class AppComponent implements OnInit {
  title = 'Code Shots With Profanis - Like and Subscribe :)';
  componentToLoad: Type<any> | null = null;
  componentInputs: Record<string, any> | undefined = undefined;

  async ngOnInit() {
    this.componentToLoad = (await environment.component.path()).default;
    this.componentInputs = environment.component.inputs;
  }
}
