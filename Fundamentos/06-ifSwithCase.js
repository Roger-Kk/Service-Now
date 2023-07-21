//
// S11S01 - If Statements
//
var a = 1;
var b = 3;
var c = 5;
if (a < b)
  gs.info('a is less than b');

// else
if (a < b)
  gs.info('a is less than b');
else
  gs.info('a is greater than or equal to b');

// Else if and else
if (a < b)
  gs.info('a is less than b');
else if (a > b)
  gs.info('a is greater than b');
else if (a == b)
  gs.info('a equals b');
else
  gs.info('Uh-oh');

if (a < b)
  if (b < c)
      gs.info('a b c are in order');




      //
// S11S02 - Boolean logic
//
// AND (&&) - both must be true
//      +---------+---------+---------+
//      |   AND   |  true   |  false  |
//      +---------+---------+---------+
//      |  true   |  true   |  false  |
//      +---------+---------+---------+
//      |  false  |  false  |  false  |
//      +---------+---------+---------+
//
// OR (||) - Either must be true
//      +---------+---------+---------+
//      |   OR    |  true   |  false  |
//      +---------+---------+---------+
//      |  true   |  true   |  true   |
//      +---------+---------+---------+
//      |  false  |  true   |  false  |
//      +---------+---------+---------+
//
// NOT (!) - reverse the logic
//      +---------+---------+---------+
//      |   NOT   |  true   |  false  |
//      +---------+---------+---------+
//      |         |  false  |  true   |
//      +---------+---------+---------+
//
var a = 1;
var b = 3;
var c = 5;

if (a < b && b < c)
  gs.info('a b c are in order');

if (b > a || b > c)
  gs.info('b is greater than one of them.');

// Note, indentation can be deceptive!!!
if (a < b)
  if (b < c) {
    gs.info('a b c are in order');
    gs.info(' that means a is less than c');
  }
else
  gs.info('a is greater than or equal to b');

var valveOpen = true;
if (valveOpen == true)
  gs.info('Valve is currently open');

if (bool)
  gs.info('Valve is currently open');

var valveOpen = false;
if (!valveOpen)
  gs.info('Valve is currently closed');






// L13S01 - Multiple cases
//
// Using if/else if/else if...
var level = 5;
var message = '';
if (level == 0)
  message = 'Empty';
else if (level == 1 || level == 2)
  message = 'Low';
else if (level == 3)
  message = 'Medium';
else if (level == 4)
  message = 'High';
else if (level == 5)
  message = 'Full';
else
  message = 'Uh-oh';
gs.info('Level=' + level + ' status=' + message);

// Using the switch statement
var level = 5;
var message = '';
switch (level) {
  case 0:
    message = 'Empty';
    break;

  case 1:
  case 2:
    message = 'Low';
    break;

  case 3: // Warning - what's wrong with case 3?
    message = 'Medium';
    break;
    
  case 4:
    message = 'High';
    break;

  case 5:
    message = 'Full';
    break;

  default:
    message = 'Uh-oh!';
}
gs.info('Level=' + level + ' status=' + message);
