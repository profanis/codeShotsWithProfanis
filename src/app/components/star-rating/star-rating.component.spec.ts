import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { StarRatingComponent } from './star-rating.component';

@Component({
  template: `
    <app-star-rating
      [rating]="testRating"
      [maxStars]="testMaxStars"
    ></app-star-rating>
  `,
  imports: [StarRatingComponent],
})
class TestHostComponent {
  testRating = 4;
  testMaxStars = 5;
}

describe('StarRatingComponent', () => {
  let component: StarRatingComponent;
  let fixture: ComponentFixture<StarRatingComponent>;
  let hostComponent: TestHostComponent;
  let hostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarRatingComponent, TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StarRatingComponent);
    component = fixture.componentInstance;

    hostFixture = TestBed.createComponent(TestHostComponent);
    hostComponent = hostFixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct number of stars', () => {
    fixture.componentRef.setInput('rating', 3);
    fixture.componentRef.setInput('maxStars', 5);
    fixture.detectChanges();

    const stars = component.stars();
    expect(stars.length).toBe(5);
    expect(stars.filter((star) => star.filled).length).toBe(3);
  });

  it('should mark 4 stars as filled when rating is 4', () => {
    fixture.componentRef.setInput('rating', 4);
    fixture.componentRef.setInput('maxStars', 5);
    fixture.detectChanges();

    const stars = component.stars();
    expect(stars.filter((star) => star.filled).length).toBe(4);
    expect(stars[0].filled).toBe(true);
    expect(stars[1].filled).toBe(true);
    expect(stars[2].filled).toBe(true);
    expect(stars[3].filled).toBe(true);
    expect(stars[4].filled).toBe(false);
  });

  it('should handle edge cases correctly', () => {
    // Test with rating 0
    fixture.componentRef.setInput('rating', 0);
    fixture.componentRef.setInput('maxStars', 5);
    fixture.detectChanges();

    let stars = component.stars();
    expect(stars.filter((star) => star.filled).length).toBe(0);

    // Test with rating exceeding maxStars
    fixture.componentRef.setInput('rating', 6);
    fixture.componentRef.setInput('maxStars', 5);
    fixture.detectChanges();

    stars = component.stars();
    expect(stars.filter((star) => star.filled).length).toBe(5);
  });

  it('should work with different maxStars values', () => {
    fixture.componentRef.setInput('rating', 3);
    fixture.componentRef.setInput('maxStars', 10);
    fixture.detectChanges();

    const stars = component.stars();
    expect(stars.length).toBe(10);
    expect(stars.filter((star) => star.filled).length).toBe(3);
  });
});
