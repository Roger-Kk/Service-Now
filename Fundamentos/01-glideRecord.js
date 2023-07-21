// L01S02 - example server side script
////
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


//
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




//
// L21S04 - getting a single record quickly
// Just need one record? Use .get(SYSID) or .get('fieldName', fieldValue)
//
var incGr = new GlideRecord('incident');

if (incGr.get('965c9e5347c12200e0ef563dbb9a7156')) {
  gs.info(incGr.getValue('number'));
}

// or...
var incGr = new GlideRecord('incident');

if (incGr.get('number', 'INC0000059')) {
  gs.info(incGr.getValue('sys_id'));
}




//Glide Record API uses:

//Main example:
var nameGR = new GlideRecord('table_name');
nameGR.addQuery('field_value', 'operator', 'field_value');
nameGR.query();
while(nameGR.next()){
    //add code here
}

// Chain Methods:
// addOrCondition(); addNullQuery(); addNotNullQuery()
// addActiveQuery(); addInactiveQuery();
var incidentGR = new GlideRecord('incident');
var orCond1 = incidentGR.addQuery('priority', '1');
orCond1.addOrCondition('priority', '2');
var orCond2 = incidentGR.addQuery('category', 'hardware');
orCond2.addOrCondition('category', 'software');
incidentGR.addQuery('sys_created_on', '>','2017-01-01 12:00:00');
incidentGR.addNotNullQuery('short_description');
incidentGR.query();


// get() method
var gr = new GlideRecord ('incident');
gr.get('number', 'XXXXXXXXX');
//gs.print(gr.short_description);


//Iteration throught a list
var newIncidents = [];
var counter = 1;
var incidentGR = new GlideRecord('incident');
while counter <= 5{
    incidentGR.newRecord();
    incidentGR.short_description = 'Incident #' + counter;
    counter ++;
    newIncidents.push(incidentGR.insert());
} 
//gs.print(newIncidents);


//GlideAggregate
var count = new GlideAggregate('incident');
count.addAggregate('COUNT');
count.query();
var incidents = 0;
if(count.next()){
    incidents = count.getAggregate('COUNT');
}









