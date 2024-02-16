import { Component, computed, input } from '@angular/core';

export interface UserModel {
  name: string;
  age: number;
  address: string;
  twitter: string;
  linkedin: string;
  github: string;
  instagram: string;
  facebook: string;
  website: string;
  email: string;
}

@Component({
  selector: 'app-child',
  standalone: true,
  template: `
    <ul>
      @for (social of userSocials(); track social) {
        <li>{{ social }}</li>
      }
    </ul>
  `,
})
export class ChildComponent {
  user = input.required<UserModel>();
  userSocials = computed(() => {
    const { name, age, ...userSocials } = this.user();
    return Object.values(userSocials);
  });
  /* @Input({ required: true }) user!: UserModel;
  userSocials: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.user) {
      const { name, age, ...userSocials } = this.user;
      this.userSocials = Object.values(userSocials);
    }
  } */
}

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  template: `<app-child [user]="user" />`,
})
export class ParentComponent {
  user: UserModel = {
    name: 'John Doe',
    age: 30,
    address: '123 Main St',
    twitter: '@johndoe',
    linkedin: 'johndoeLinkedIn',
    github: 'johndoeGitHub',
    instagram: 'johndoeInstagram',
    facebook: 'johndoeFacebook',
    website: 'johndoe.com',
    email: 'john@doe.com',
  };
}
