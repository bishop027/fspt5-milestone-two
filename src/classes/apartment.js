/*------------------
NOTE: Do not work on this class until
after you have completed the Building class!

You will be equally evaluated on the
quality of tests you write for this!

1. A class named Apartment has been created, exported, and imported into the test file. 
2. Add the proper code so that this class
extends the Building class. Test it!
3. Add one additional property (your choice) to Apartment and test it.
4. Add one additional method (your choice) to Apartment and test it.
------------------*/

const Building = require("./building");

class Apartment extends Building {
  constructor(year, name, height, width) {
    // pass arguments to parent
    super(year, name, height, width);

    // add new properties
    this.apartmentNumber = 0;
    this.vacant = true;
  }

  printVacancy() {
    if (this.vacant === true)
      return `${this.apartmentNumber} is available to rent.`;
    else return `${this.apartmentNumber} is NOT available to rent.`;
  }
}

module.exports = Apartment;
