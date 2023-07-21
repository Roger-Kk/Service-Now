// L19S01 - Functions
//
function sayHello() {
    gs.info('Hello');
  }
  sayHello();

// L19S02 - Function with a parameter
//
function toCelsius(fahrenheit) {

    var c = (5 / 9) * (fahrenheit - 32);

    gs.info(c);
}
toCelsius(32);
toCelsius(100);



function toCelsius(fahrenheit){

    return (5 / 9)* (fahrenheit - 32);

}
var c = toCelsius(32);
gs.info(c);

c = toCelsius(212);
gs.info(c);


// L19S04 - Local variables scope
//
function toCelsius(fahrenheit) {

    // c is only known in the function toCelsius()
    var c = (5 / 9) * (fahrenheit - 32);

    return c;
}
gs.info(c); // What happened?


// L19S05 - Global variables and local
//
var convertTo = 'F';

function toCelsius(f) {

    var c = (5 / 9) * (f - 32);
        
    return c;
}

function toFahrenheit(c) {

    var f = c * 9 / 5 + 32;
        
    return f;
}

function convertTemp(temp) {

  // use the global variable to determine conversion
  if (convertTo == 'C') {
    return toCelsius(temp);
  } else {
    return toFahrenheit(temp);
  }
}

gs.info(convertTemp(100));


// L19S06 - Self running function
//

// This code is outside the function
var i = 20;

(function() {

  // Local variable
  i = 10; // uh-oh, forgot the var!

  gs.info('i=' + i);
  
}());

i = 3;
gs.info('i=' + i);


