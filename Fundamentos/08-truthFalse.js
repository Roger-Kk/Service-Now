//
// L14S01 - Truthy and Falsy
//

// Simple case of true and false
//
var boolTrue = true;
var boolFalse = false;
gs.info('boolTrue=' + boolTrue + ' boolFalse=' + boolFalse);




//
// L14S02 - Truthy and Falsy
//

// What about numbers
//
var num = 0; // <== try with different numbers
gs.info(num + ' is ' + ((num) ? 'true' : 'false'));




//
// L14S03 - Truthy and Falsy
//

// Take a look at strings
//
var string1;
var string2 = null;
var string3 = 'Hello, world!';
gs.info('string1=' + ((string1) ? 'true' : 'false'));
gs.info('string2=' + ((string2) ? 'true' : 'false'));
gs.info('string3=' + ((string3) ? 'true' : 'false'));