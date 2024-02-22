import { Component } from '@angular/core';

@Component({
  selector: 'app-card-skeleton',
  standalone: true,
  imports: [],
  template: `
    <!-- header -->
    <div class="container">
      <div class="header"></div>
      <div class="content"></div>
      <div class="footer"></div>
      <div class="actions">
        <div class="action-button"></div>
        <div class="action-button"></div>
      </div>
    </div>
  `,
  styles: `
    .container {
      width: 280px;
      height: 472px;
      box-sizing: border-box;
      display: flex;
      flex-flow: column;
      gap: 16px;
      box-shadow:
        0px 2px 1px -1px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14),
        0px 1px 3px 0px rgba(0, 0, 0, 0.12);
      margin-bottom: 16px;
      padding: 8px;
      cursor: pointer;
      justify-content: space-between;

      &:hover {
        box-shadow:
          0px 2px 1px -1px rgba(0, 0, 0, 1),
          0px 1px 1px 0px rgba(0, 0, 0, 1),
          0px 1px 3px 0px rgba(0, 0, 0, 1);
      }
    }

    .header {
      height: 35px;
      background-color: #f3f3f3;
    }

    .content {
      height: 220px;
      background-color: #f3f3f3;
    }

    .footer {
      height: 50px;
      background-color: #f3f3f3;
    }

    .actions {
      display: flex;
      flex-flow: row;
      align-items: center;
      gap: 16px;
    }

    .action-button {
      background-color: #f3f3f3;
      width: 68px;
      height: 20px;
    }
  `,
})
export class CardSkeletonComponent {}
