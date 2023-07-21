//
// L10S01 - Arithmetic Operators
//
var a = 0;
var b = 1;
gs.info(a < b);

var n = '3';
var i = 3;
gs.info(n == i); // REALLY?!!
gs.info(i = 4); // WATCH OUT!!!



/*
var a = 12;
var b = 5;
var c = 3;

if(a < b){
   gs.info('a is less than b');
}

var bool = a < b;
if (bool == true){
   gs.info('a is less than b');
}


if(bool) {
   gs.info('a is less than b again');
} else {
   gs.info('a is NOT less than b');
}


gs.info('\n\n');

if(a < b && b < c){
   gs.info('a, b and c are in order');
}

if (b > a || b > c){
   gs.info ('b is greater than one of them.');
}
*/

gs.info('\n\n');

var valveOpen = true;
if (valveOpen == true){
   gs.info('Valve is currently open');
}

if (valveOpen){
   gs.info('Valve is currently open');
}

var valveOpen = false;
if (!valveOpen){
   gs.info('Valve is currently closed');
}

// L12S01 - The ternary operator
//
// Could have written...
var valveOpen = true;
var openStatusString;
if (valveOpen)
  openStatusString = 'open';
else
  openStatusString = 'closed';
  gs.info('1: Valve is currently ' + openStatusString);

// Introducing a shortcut way...
var openStatusString = (valveOpen) ? 'open' : 'closed';
gs.info('2: Valve is currently ' + openStatusString);

//another example:

var isOpenString = 'true';
var isOpen = (isOpenString == 'true') ? true : false;
if (isOpen){
    gs.info('This is open');
}

// atualização para testar commit do git no terminal...

