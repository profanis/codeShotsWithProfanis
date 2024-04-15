export function randomColor() {
  const colors = [
    '#FDFEFE', // Light Gray
    '#38A3A5', // Teal
    '#FB8C00', // Light Orange
    '#9D38BD', // Purple
    '#FFF9C4', // Cream
    '#C02942', // Deep Rose
    '#73C6BE', // Light Blue
    '#D87093', // Light Pink
    '#AFEEEE', // Light Seafoam
    '#FCF0E3', // Light Beige
  ];

  return colors[Math.floor(Math.random() * colors.length)];
}
