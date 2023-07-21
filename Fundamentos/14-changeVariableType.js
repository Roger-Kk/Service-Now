//
//  L08S01 - Changing and detecting variable types
//
var i = 5;
var iStr = i.toString();
gs.info(typeof i);
gs.info(typeof iStr);

var n = parseInt(iStr);
gs.info(typeof n + ' n=' + n);

//class actividy 
var i = 5;
var iStr = i.toString();

gs.info('type of i = ' + typeof i);

gs.info('type of iStr = ' + typeof iStr);

var n = parseInt(iStr);
var f = parseFloat(iStr);
gs.info('f = ' + f);

gs.info(typeof n + ' n = ' + n);

gs.info('n + i = ' + (n + iStr));

//homework

gs.info('\n\n\n');
var a = "One";
var b = "Two";
var c = "Three";
var d = a + '\n' + b  + '\n' + c;

gs.info('length of a = ' + a.length);
gs.info('length of b = ' + b.length);