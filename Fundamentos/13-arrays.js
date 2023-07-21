// L22S01 - Arrays
//

// Make a simple array
//
// Optional declaration, but not preferred:
// var list = Array();
var list = [];
list[0] = 1;
list[1] = 3;
list[2] = 5;
gs.info('length of list is: ' + list.length);


// L22S02 - Shorter way
//
var list = [1, 3, 5];
gs.info('length of list is: ' + list.length);

// L22S03 - Loops and arrays
//
var list = [1, 3, 5];
for (var i = 0; i < list.length; i++) {
  gs.info('i=' + i + ' value=' + list[i]);
}

// Slightly better
var list = [1, 3, 5];
var len = list.length;
for (var i = 0; i < len; i++) {
  gs.info('i=' + i + ' value=' + list[i]);
}

// L23S01 forEach with external function
//
var list = [1, 3, 5];

list.forEach(myFunction);

function myFunction(item) {
  gs.info('myFunction item=' + item);
}

// L23S02 embedded forEach
//
var list = [1, 3, 5];

list.forEach(function (item) {
  gs.info('embedded function item=' + item);
});

// L23S03 - What else can you get..
//
var list = ['apple', 'banana', 'orange'];

list.forEach(function (item, index, arr) {
  gs.info('embedded function item=' + item + ' index=' + index + ' arr=' + arr);
});

// L23S01 forEach with external function
//
var list = [1, 3, 5];

list.forEach(myFunction);

function myFunction(item, i) {
  gs.info('myFunction item=' + item + 'i = ' + i);
}

// L23S02 embedded forEach
//
var list = [1, 3, 5];

list.forEach(function (item) {
  gs.info('embedded function item=' + item);
});

// L23S03 - What else can you get..
//
var list = ['apple', 'banana', 'orange'];

list.forEach(function (item, index, arr) {
  gs.info('embedded function item=' + item + ' index=' + index + ' arr=' + arr);
});


//  L24S01 - Common array methods/functions
//
var list = ['Chuck', 'Kreg', 'Stacey'];
gs.info('list=' + list);

// L24S02 - join(string)
//
var list = ['Chuck', 'Kreg', 'Stacey'];
gs.info('join: list=' + list.join(', '));

// push(value1, value2, ..., valueX)
list.push('Dave');
list.push('Andrew');
gs.info('push: list=' + list.join(', '));

// pop()
list.pop();
gs.info('pop: list=' + list.join(', '));

// L24S03 - shift()
//
var list = ['Chuck', 'Kreg', 'Stacey'];
gs.info('Before shift(), list[0]=' + list[0]);
list.shift();
gs.info('shift: list=' + list.join(', '));
gs.info('After shift(), list[0]=' + list[0]);


// L24S04 - unshift
//
var list = ['Chuck', 'Kreg', 'Stacey'];
var newLength = list.unshift('Jason', 'Andrew');
gs.info('new length=' + newLength + ' unshift() list=' + list.join(', '));


// L24S05 - splice(position, n-remove, value1, value2, ..., valueX) - add/remove elements somewhere in the middle
//
var names = ["Eric", "Donna", "Melanie", "Jessie"];
gs.info(names.join(', '));
names.splice(2, 0, "Cary", "Henri");
gs.info(names.join(', '));


// L24S06 -  slice(start, end) - extract part of an array in to another array
//
var names = ["Eric", "Donna", "Melanie", "Jessie", "Howard", "Tomasz"];
gs.info(names.join(', '));
var subNames = names.slice(1, 3); // Get names at positions 1 and 2
gs.info(subNames.join(', '));


// L24S08 - Reverse the elements of an array
//
var names = ["Eric", "Donna", "Melanie", "Jessie", "Howard", "Tomasz"];
names.reverse();
gs.info(names.join(', '));


// L24S09 - Getting the value
//
var list = [];
var incGr = new GlideRecord('incident');
incGr.addQuery('priority', '1');
incGr.query();

while (incGr.next()) {
    list.push(incGr.getValue('sys_id'));
}

gs.info('list=\n' + list.join('\n'));



// L25S01 - ArrayUtil
//
var au = new ArrayUtil();
var names = [
  "Eric",
  "Donna",
  "Melanie",
  "Jessie",
  "Howard",
  "Eric",
  "Jessie",
  "Tomasz"
];
var newNames = au.unique(names);
gs.info(newNames.join(', '));


