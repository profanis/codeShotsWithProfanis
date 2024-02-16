export function randomColor() {
  const colors = [
    '#FF0000',
    '#00FF00',
    '#0000FF',
    '#FFFF00',
    '#00FFFF',
    '#FF00FF',
    '#C0C0C0',
    '#808080',
    '#800000',
    '#808000',
  ];

  return colors[Math.floor(Math.random() * colors.length)];
}
