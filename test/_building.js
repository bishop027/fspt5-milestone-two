const { expect } = require("chai");
const Building = require("../src/classes/building");
const { isClass } = require("./utilities");

let building = null;

describe("Building", () => {
  beforeEach(() => {
    building = new Building();
  });
  describe("Building", () => {
    it("should be a class", () => {
      expect(isClass(Building)).to.be.true;
    });
    expect(building.hasOwnProperty("year")).to.equal(true);
    expect(building.hasOwnProperty("name")).to.equal(true);
    expect(building.hasOwnProperty("height")).to.equal(true);
    expect(building.hasOwnProperty("width")).to.equal(true);
    expect(building.hasOwnProperty("apartments")).to.equal(true);
  });

  describe("the buildingArea method", () => {
    it("should have a building area", () => {
      expect(Building.prototype.buildingArea().to.exist);
    });
    it("should calculate the area of the building", () => {
      expect(building.buildingArea().to.equal(this.height * this.width));
    });

    describe("the numerOfCars method", () => {
      it("should have a cars", () => {
        expect(Building.prototype.numberOfCars().to.exist);
      });
      it("should calculate the number of cars in the parking garage", () => {
        expect(building.buildingArea().to.equal(this.apartments * 2));
      });

      describe("the getInfo method", () => {
        it("should have building information", () => {
          expect(Building.prototype.getInfo().to.exist);
        });
        it("should show all the building information", () => {
          expect(
            building
              .getInfo()
              .to.have.ownPropertyDescriptor(
                this.name,
                this.year,
                this.numberOfCars
              )
          );
        });
      });
    });
  });
});
