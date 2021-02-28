/*------------------
You will be equally evaluated on the
quality of tests you write for this!

1. Create a class named Building. (already done for you)
2. Add two properties (your choice) and test them.
3. Add two methods (your choice) and test them.
You should test that they exist and that they work correctly.
You can add as many tests as you see fit.
------------------*/

class Building {
  constructor(name) {
    this.year = 0;
    this.name = name;
    this.height = 0;
    this.width = 0;
    this.apartments = 0;
  }

  buildingArea() {
    return this.height * this.width;
  }

  numberOfCars() {
    return this.apartments * 2; // each apartment can have 2 registered cars in the parking garage
  }

  getInfo() {
    return `${this.name} was built in ${this.year}, has ${
      this.numberOfCars
    } in the parking garage, and has an area of ${this.buildingArea}.`;
  }
}

module.exports = Building;
