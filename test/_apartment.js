const { expect } = require("chai");
const Apartment = require("../src/classes/apartment");
const { isClass } = require("./utilities");

let apartment = null;

describe("Apartment", () => {
  beforeEach(() => {
    apartment = new Apartment();
  });
  describe("Apartment", () => {});
  it("should be a class", () => {
    expect(isClass(Apartment)).to.be.true;
  });
  expect(apartment.hasOwnProperty("apartmentNumber")).to.equal(0); // ran out of time, but I'm looking through Chai's library to see my mistakes
  expect(apartment.hasOwnProperty("vacant")).to.equal(true);
});

describe("the printVacancy method", () => {
  it("should have a vacancy post", () => {
    expect(Apartment.prototype.printVacancy().to.exist);
  });
  it("should state whether the apartment is vacant or not", () => {
    expect(apartment.this.vacacy.to.equal(true, false));
  });
});
