//
// L01S02 - example server side script
//
var gr = new GlideRecord('task');
gr.addActiveQuery();
gr.query();

while (gr.next()) {
    gs.info(gr.getValue('number'));
}


// L21S01 - Simple Database query
//

// Get and display numbers on all incidents
var incGr = new GlideRecord('incident');
incGr.query();

while (incGr.next()) {
  gs.info(incGr.getValue('number'));
}

// L21S02 - Get and display numbers on all incidents v2
//
var incGr = new GlideRecord('incident');
incGr.addQuery('active', true);
incGr.orderBy('number');
incGr.setLimit(5);
incGr.query();

while (incGr.next()) {
  gs.info(incGr.getValue('number'));
}

// L21S03 - What is 'number’?
//
var incGr = new GlideRecord('incident');
incGr.setLimit(1);
incGr.query();

if (incGr.next()) {
  var dotNumber = incGr.number;
  var gvNumber  = incGr.getValue('number');
  gs.info('dotNumber=' + typeof dotNumber + ' gvNumber=' + typeof gvNumber);
}

// Why should I care? I'll show you when we get to arrays...



// L21S04 - getting a single record quickly
// Just need one record? Use .get(SYSID) or .get('fieldName', fieldValue)
//
var incGr = new GlideRecord('incident');
// incGr.addQuery('sys_id, '965c9e5347c12200e0ef563dbb9a7156');
// incGr.query();
if (incGr.get('965c9e5347c12200e0ef563dbb9a7156')) {
  gs.info(incGr.getValue('number'));
}

// or...
var incGr = new GlideRecord('incident');

if (incGr.get('number', 'INC0000059')) {
  gs.info(incGr.getValue('sys_id'));
}


//Trigger Server Side Scheduled Jobs

SncTriggerSynchronizer.executeNow();




