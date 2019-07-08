// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides
  }

  get countSides {
    return this.sides.length
  }

  get perimeter {
    return this.sides.reduce((accum, side) => accum + side, 0)
  }
}

class Triangle extends Polygon {
  
}
