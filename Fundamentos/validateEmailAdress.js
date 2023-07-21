//JS script include to validade email inputo on fields:

function validateEmailAddress(emailStr){
    // Use JavaScript coercion to guarantee emailStr is a string
    emailStr = emailStr + '';
    // Compare emailStr against the allowed syntax as specified in the regular expression
    // If emailStr has allowed syntax, return true, else return false
    if(emailStr.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
      return true;
    }
    else {
     return false;
    }
  }
  
 //Example of use in Business Rule: 

// Pass the Requested for email to the Script Include.  Store the return
  // value from the Script Include in the isEmail variable
  var isEmail = validateEmailAddress(current.u_requested_for_email);
  // If isEmail is false (email address syntax is not valid) do not save
  // the record.  Write an error message to the screen.
  if(isEmail == false){
    gs.addErrorMessage(current.u_requested_for_email + " is not a valid email address.  You must provide a valid email address.");
    current.setAbortAction(true);
  }
