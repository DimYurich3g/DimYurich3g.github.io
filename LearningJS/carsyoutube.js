'use strict';
let chevy = {
  make: 'Chevy',
  model: 'Aveo',
  year: 2011,
  color: 'Red',
  passengers: 4,
  convertible: false,
  mileage: 8000,
  started: false,
  fuel: 0,
  start () {
      if (this.fuel >0) {
        this.started = true;
    } else { this.started = false;
    }
  },
  stop () {
    this.started = false;
  },
  drive () {
    if (this.started) {
      if (this.fuel >0) {
          console.log(this.make + ' ' + this.model + ' ' + 'поехали');
          this.fuel = this.fuel -1;
      } else {console.log ('Заправься, родной');
      this.stop ();
      }
    } else {
      console.log ('заведи движок, браток');
    }
  },
  light () {
    console.log ('включен ближний свет');    
  },
  addFuel (mount) {
    this.fuel = this.fuel + mount;
  }
};

chevy.addFuel (2);
chevy.start ();
chevy.drive ();

console.log (chevy.fuel);
// function check (car) {
//   if (car.mileage > 10000) {
//     return false;
//   } else if (car.year > 1960) {
//     return false;
//   }
//   car.buy = true;
// }

// let car = check (cadi);

// chevy.light ();


