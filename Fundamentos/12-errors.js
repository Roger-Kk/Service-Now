//
// L20S01 - bad script w/o try/catch
//

for (var i = 0; i < 5; i++) {
    gs.info('i=' + i + ' answer=' + answer);
  }
  gs.info('done');



  //
// L20S02 - Trapping that error
//
try {
    for (var i = 0; i < 5; i++) {
      gs.info('i=' + i + ' answer=' + answer);
    }
  } catch (e) {
    gs.error('Uh-oh ' + e.message);
  }
  gs.info('done');


  // 
// L20S03 - And finally…
//
try {
    for (var i = 0; i < 5; i++) {
      gs.info('i=' + i + ' answer=' + answer);
    }
  } catch (e) {
    gs.error('Uh-oh ' + e.message);
  } finally {
    gs.info('done');
  }


