// L15S01 - Simple while loop
//
var i = 0;
while (i < 5) {
  gs.info(i);
  i++;
}
gs.info('done i=' + i);

// L15S02 - breaking out of a while loop
//
var i = 0;
while (true) {
  if (i == 5)
    break;
  gs.info(i);
  ++i;
}
gs.info('done');

// L15S03 - Continue - jumping back to the while condition
//
var i = 0;
var done = false;
while (!done) {
  if (i < 5) {
    ++i;
    gs.info(i + ' done=' + done);
    continue;
  }
  gs.info('I think we are done');
  done = true;
}
gs.info(i);


// FOR loop:

for (var i = 0; i < 5; i++){
    gs.info(i);
}
gs.info("Done i = " + i);


// Do while loop: 
var i = 0;
gs.info("Start");
do{
    gs.info('i = ' + i);
    i++;
} while (i < 5);
gs.info("Done i = " + i);

// Nested loops (loop within a loop)

for (var i = 0; i < 5; i++){
    for (var j = 0; j < 3; j++){
        gs.info('i = ' + i + ", j = " + j);
    }
}
gs.info('Done i=' + i + ' j=' + j);

