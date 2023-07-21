//
// L16S01 - For loop
//
// Note: break and continue work here too!
for (var i = 0; i < 5; i++) {
    gs.info(i);
  }
  gs.info('done i=' + i);



  // L17S01 - do-while
//
var i = 0;
gs.info('start');
do {
  gs.info('i=' + i);
  ++i;
} while (i < 5);
gs.info('done i=' + i);



//
// L18S01 - Nested loops
//
for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 3; j++) {
      gs.info('i=' + i + ' j=' + j);
    }
  }
  gs.info('Done i=' + i + ' j=' + j);




  