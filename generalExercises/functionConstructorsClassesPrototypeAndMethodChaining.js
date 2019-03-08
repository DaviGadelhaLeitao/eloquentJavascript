// A FUNCTION CONSTRUCTOR
/*######################################################### */
function Person(name, lastname) {
  this._name = name;
  this._lastname = lastname;
}

Person.prototype.setName = function(name) {
  this._name = name;
};

Person.prototype.setLastname = function(lastname) {
  this._lastname = lastname;
};

person = new Person();

person.setName("davi");
person.setLastname("leitão");

console.log(person);

// SETTERS AND GETTERS without returning this and therefore not allowing chaining methods on their setters
/*######################################################### */
function TV(brand, model, price) {
  this._brand = brand;
  this._model = model;
  this._price = price;

  // setter without returning the object
  this.setBrand = function(brand) {
    this._brand = brand;
  };

  this.setModel = function(model) {
    this._model = model;
  };

  this.setPrice = function(price) {
    this._price = price;
    return this;
  };
}

tv = new TV();
// Method Chaining will give an error
//tv.setBrand("samsung").setModel("ZY-800");
tv.setPrice(200).setBrand("samsung");
console.log(tv);

// CLASS FEATURE INTRODUCED IN ES6(2015)
/*######################################################### */
class Car {
  constructor(brand, price, model) {
    this._brand = brand;
    this._price = price;
    this._model = model;
  }

  setBrand(brand) {
    this._brand = brand;
  }

  setPrice(price) {
    this._price = price;
    return this;
  }

  setModel(model) {
    this._model = model;
    return this;
  }
}

//let car = new Car('Fiat', 'Red');
let car = new Car();
car.setBrand("Fiat");
car.setPrice(60000);
car.setModel("camaro").setPrice(100000);

console.log(car);
