import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface Book {
  id: number;
  title: string;
  price: number;
  counter?: number;
  starRating: number;
  image: string;
  shortDescription: string;
  category:
    | 'fiction'
    | 'non-fiction'
    | 'biography'
    | 'tech'
    | 'self-help'
    | 'history'
    | 'science';
}

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private books: Book[] = [
    {
      id: 1,
      title: 'The Great Gatsby',
      price: 10.99,
      starRating: 4.5,
      counter: 0,
      image: 'great-gatsby.jpg',
      shortDescription: 'A novel by F. Scott Fitzgerald',
      category: 'fiction',
    },
    {
      id: 2,
      title: 'Sapiens: A Brief History of Humankind',
      price: 14.99,
      starRating: 4.7,
      counter: 0,
      image: 'sapiens.jpg',
      shortDescription: 'A book by Yuval Noah Harari',
      category: 'non-fiction',
    },
    {
      id: 3,
      title: 'Steve Jobs',
      price: 18.99,
      starRating: 4.6,
      counter: 0,
      image: 'steve-jobs.jpg',
      shortDescription: 'A biography by Walter Isaacson',
      category: 'biography',
    },
    {
      id: 4,
      title: 'Clean Code',
      price: 29.99,
      starRating: 4.8,
      counter: 0,
      image: 'clean-code.jpg',
      shortDescription:
        'A handbook of agile software craftsmanship by Robert C. Martin',
      category: 'tech',
    },
    {
      id: 5,
      title: 'Atomic Habits',
      price: 11.99,
      starRating: 4.9,
      counter: 0,
      image: 'atomic-habits.jpg',
      shortDescription:
        'An easy & proven way to build good habits by James Clear',
      category: 'self-help',
    },
    {
      id: 6,
      title: 'Guns, Germs, and Steel',
      price: 15.99,
      starRating: 4.4,
      counter: 0,
      image: 'guns-germs-steel.jpg',
      shortDescription: 'A book by Jared Diamond',
      category: 'history',
    },
    {
      id: 7,
      title: 'A Brief History of Time',
      price: 12.99,
      starRating: 4.6,
      counter: 0,
      image: 'brief-history-time.jpg',
      shortDescription: 'A book by Stephen Hawking',
      category: 'science',
    },
    {
      id: 8,
      title: 'To Kill a Mockingbird',
      price: 9.99,
      starRating: 4.8,
      counter: 0,
      image: 'to-kill-a-mockingbird.jpg',
      shortDescription: 'A novel by Harper Lee',
      category: 'fiction',
    },
    {
      id: 9,
      title: 'Educated',
      price: 13.99,
      starRating: 4.7,
      counter: 0,
      image: 'educated.jpg',
      shortDescription: 'A memoir by Tara Westover',
      category: 'biography',
    },
    {
      id: 10,
      title: 'The Lean Startup',
      price: 16.99,
      starRating: 4.5,
      counter: 0,
      image: 'lean-startup.jpg',
      shortDescription: 'A book by Eric Ries',
      category: 'tech',
    },
    {
      id: 11,
      title: 'The Power of Habit',
      price: 10.99,
      starRating: 4.6,
      counter: 0,
      image: 'power-of-habit.jpg',
      shortDescription: 'A book by Charles Duhigg',
      category: 'self-help',
    },
    {
      id: 12,
      title: 'The Wright Brothers',
      price: 14.99,
      starRating: 4.7,
      counter: 0,
      image: 'wright-brothers.jpg',
      shortDescription: 'A biography by David McCullough',
      category: 'biography',
    },
    {
      id: 13,
      title: 'The Innovators',
      price: 17.99,
      starRating: 4.6,
      counter: 0,
      image: 'innovators.jpg',
      shortDescription: 'A book by Walter Isaacson',
      category: 'tech',
    },
    {
      id: 14,
      title: 'Thinking, Fast and Slow',
      price: 12.99,
      starRating: 4.5,
      counter: 0,
      image: 'thinking-fast-slow.jpg',
      shortDescription: 'A book by Daniel Kahneman',
      category: 'non-fiction',
    },
    {
      id: 15,
      title: 'The Selfish Gene',
      price: 11.99,
      starRating: 4.4,
      counter: 0,
      image: 'selfish-gene.jpg',
      shortDescription: 'A book by Richard Dawkins',
      category: 'science',
    },
    {
      id: 16,
      title: 'The Catcher in the Rye',
      price: 8.99,
      starRating: 4.3,
      counter: 0,
      image: 'catcher-in-the-rye.jpg',
      shortDescription: 'A novel by J.D. Salinger',
      category: 'fiction',
    },
    {
      id: 17,
      title: 'The Art of War',
      price: 6.99,
      starRating: 4.2,
      counter: 0,
      image: 'art-of-war.jpg',
      shortDescription: 'A book by Sun Tzu',
      category: 'history',
    },
    {
      id: 18,
      title: 'The Subtle Art of Not Giving a F*ck',
      price: 14.99,
      starRating: 4.3,
      counter: 0,
      image: 'subtle-art.jpg',
      shortDescription: 'A book by Mark Manson',
      category: 'self-help',
    },
    {
      id: 19,
      title: 'The Gene: An Intimate History',
      price: 16.99,
      starRating: 4.6,
      counter: 0,
      image: 'gene.jpg',
      shortDescription: 'A book by Siddhartha Mukherjee',
      category: 'science',
    },
    {
      id: 20,
      title: '1984',
      price: 9.99,
      starRating: 4.7,
      counter: 0,
      image: '1984.jpg',
      shortDescription: 'A novel by George Orwell',
      category: 'fiction',
    },
  ];

  getBooks() {
    return of(this.books);
  }
}
