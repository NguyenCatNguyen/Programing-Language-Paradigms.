class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get area() {
    return Math.PI * this.radius ** 2;
  }
  set area(area) {
    this.radius = Math.sqrt(area / Math.PI);
  }
}