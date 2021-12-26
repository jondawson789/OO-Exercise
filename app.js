class Vehicle {
    constructor(make, model, year) {
      this.make = make; 
      this.model = model; 
      this.year = year; 
    }
  
    honk() {
      return "beep"; 
    }
  
    toString() {
     return `This vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model, year) {
      super(make, model, year); 
      this.numWheels = 4;  
    }
  }
  
  class Motorcycle extends Vehicle {
    constructor(make, model, year) {
      super(make, model, year); 
      this.numWheels = 2; 
    }
  
  revEngine() {
    return "Vroom"; 
  }
  }
  
  class Garage {
    constructor(capacity) {
      this.capacity = capacity; 
      this.vehicles = []; 
    }
  
    add(newVehicle) {
      if(!(newVehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!"; 
      }
      else if(this.capacity === this.vehicles.length) {
        return "Sorry, we're full."
      }
      this.vehicles.push(newVehicle); 
    }
  }