import { CommonModule } from '@angular/common';
import { HttpClient, httpResource } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { delay, of } from 'rxjs';
import { z } from 'zod';
import { RecipesComponent } from './features/recipes/recipes.component';

const postSchema = z.object({
  userId: z.number(),
  id: z.number({ coerce: true }),
  title: z.string(),
  body: z.string(),
});

const postsSchema = z.array(postSchema);

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RecipesComponent],
})
export class AppComponent {
  title = 'Code Shots With Profanis - Like and Subscribe :)';
  selectedPostId = signal<number | null>(null);
  httpClient = inject(HttpClient);

  // postResource = httpResource<any[]>(
  //   'https://jsonplaceholder.typicode.com/posts',
  // );

  // postResource = httpResource<any[]>(
  //   () => 'https://jsonplaceholder.typicode.com/posts',
  // );

  postResource = httpResource<any[]>(
    {
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'GET',
    },
    {
      // When do we display the defaultValue? Can we display it when idle? How can we know when the resource is idle?
      defaultValue: [
        {
          userId: 1,
          id: 1,
          title:
            'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        },
      ],
      parse: (response: unknown) =>
        (response as any[]).map((it) => ({
          userId: it.userId,
          id: it.id,
          title: it.title,
          body: it.body,
        })),
      // parse: (response) => postsSchema.parse(response),
    },
  );

  // postResource = rxResource<any[], number | null>({
  //   request: signal(1),
  //   loader: ({ request }) => {
  //     return this.httpClient.get<any[]>(
  //       `https://jsonplaceholder.typicode.com/posts`,
  //     );
  //   },
  // });
  postIds = computed(() => this.postResource.value()?.map((post) => post.id));

  // STRING
  // postDetailsResource = httpResource<Post>(
  //   `https://jsonplaceholder.typicode.com/posts/${this.selectedPostId()}`,
  //   {
  //     defaultValue: {
  //       userId: 1,
  //       id: 1,
  //       title: 'Default Title',
  //       body: 'Default Body',
  //     },
  //   },
  // );

  // FUNCTION
  postDetailsResource = httpResource<Post>(
    () =>
      this.selectedPostId()
        ? `https://jsonplaceholder.typicode.com/posts/${this.selectedPostId()}`
        : undefined,
    {
      defaultValue: {
        userId: 1,
        id: 1,
        title: 'Default Title',
        body: 'Default Body',
      },
    },
  );

  // OBJECT
  // postDetailsResource = httpResource<Post>(
  //   {
  //     url: `https://jsonplaceholder.typicode.com/posts/${this.selectedPostId()}`,
  //     method: 'GET',
  //     params: { type: 'post' },
  //   },
  //   {
  //     defaultValue: {
  //       userId: 1,
  //       id: 1,
  //       title: 'Default Title',
  //       body: 'Default Body',
  //     },
  //   },
  // );

  // postDetailsResource = rxResource<any | null, number | null>({
  //   request: this.selectedPostId,
  //   loader: ({ request }) => {
  //     return request
  //       ? this.httpClient
  //           .get<any>(`https://jsonplaceholder.typicode.com/posts/${request}`)
  //           .pipe(delay(5000))
  //       : of(null);
  //   },
  //   defaultValue: {
  //     userId: 1,
  //     id: 1,
  //     title: 'Default Title',
  //     body: 'Default Body',
  //   },
  // });
}
