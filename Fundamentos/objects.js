// L26S01 - Simple Objects
//
var box = {}; // var box = new Object();
box.height   = 20;
box.width    = 10;
box.length   = 10;
box.material = "cardboard";
box.open     = true;
gs.info(box.material);


// L26S02 - Bracket notation…
//
var vehicle = {};
vehicle['year'] = 2018;
vehicle['make'] = "Toyota";
vehicle['model'] = "Sienna";
gs.info(vehicle['year'] + ' ' + vehicle['make'] +  ' ' + vehicle['model']);


// L26S03 - Shortcut - note the double quotes
// JSON - Java Script Object Notation
var vehicle = {
    "year" : 2018,
    "make"  : "Toyota",
    "model" : "Sienna"
  };
  gs.info(vehicle['year'] + ' ' + vehicle['make'] +  ' ' + vehicle['model']);


// L27S01 - hasOwnProperty - boolean answers if has property.
//
var vehicle = {
    "year" : 2018,
    "make"  : "Toyota",
    "model" : "Sienna"
  };
  gs.info(vehicle.hasOwnProperty("year"));  // <== true
  gs.info(vehicle.hasOwnProperty("price")); // <== false



// L28S01 - Get object keys - looking inside "keys" or "properties" of an object
//
var vehicle = {
    "year" : 2018,
    "make"  : "Toyota",
    "model" : "Sienna"
  };
  for (var key in vehicle) {
    gs.info('key=' + key + ' value=' + vehicle[key]);
  }





