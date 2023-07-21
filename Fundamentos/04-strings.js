// L06S01 - Strings
//
var firstName = "Chuck";
var lastName  = 'Tomasi';  // Either is ok
var myCar     = "Chuck's Car";  // Mix them to avoid issues

// Note the use of + when strings are involved
var name = firstName + ' ' + lastName;
gs.info(name);
gs.info('length of name=' + name.length);



// L07S01 - Special characters
//
// \n = new line
// \t = tab
// \\ = backslash
// \' = single quote
// \" = double quote
//
gs.info('Single string\nTwo lines');
gs.info('Chuck\'s simple script');
gs.info('Don\'t confuse a forward slash (/) with a backslash(\\)');

// Advanced level with strings

// L31S01 More string stuff
// Find the position of a character or substring
//
var subject = 'Warning: Email is not working';
var pos = subject.indexOf('Email');
gs.info(pos);

// L31S02 - Use the position of a character/substring as a condition
//
var short_description = 'System is displaying error message';
if (short_description.indexOf('error') >= 0) {
  gs.info("Error message found");
}

// L31S03 - Get a substring
//
var str = 'Approved: RITM0010001 - Laptop renewal';
var pos = str.indexOf('RITM');
var ritmNumber = str.substring(pos, pos + 11);
gs.info(ritmNumber);



// L31S04 - Case matters with strings
//
var firstName = 'Chuck';
var loginName = 'chuck';
if (loginName == firstName) {
  gs.info('names match');
} else {
  gs.info('names do not match');
}


// L31S05 - Using toUpper or toLower for better matching
//
var firstName = 'Chuck';
var loginName = 'chuck';
gs.info('firstName=' + firstName.toUpperCase() + ' loginName=' + loginName.toUpperCase());
if (loginName.toUpperCase() == firstName.toUpperCase()) {
  gs.info('names match');
} else {
  gs.info('names do not match');
}


