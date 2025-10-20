import {
  Component,
  ChangeDetectionStrategy,
  computed,
  input,
  model,
} from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';

@Component({
  selector: 'app-star-rating',
  imports: [],
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarRatingComponent implements FormValueControl<number> {
  // Input property for the rating value
  value = model<number>(0);

  // Maximum number of stars (configurable)
  maxStars = input<number>(5);

  // Computed property to generate the stars array
  stars = computed(() => {
    const totalStars = this.maxStars();
    const currentRating = Math.max(0, Math.min(this.value(), totalStars));

    return Array.from({ length: totalStars }, (_, index) => ({
      filled: index < currentRating,
      index: index + 1,
    }));
  });

  // Click handler for star selection
  onStarClick(starIndex: number): void {
    this.value.set(starIndex);
  }
}
