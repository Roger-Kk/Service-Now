// Client side script to get user.field
// from global scopped 'sys_user' list


//Working but needs condition:
var gr = new GlideRecord('sys_user'); 
gr.addQuery('state','PR');
gr.query(); // Issue the query to the database to get relevant records 
while (gr.next()) { 
  gs.info(gr);
}


//To test:

var u = gs.getUserID();
var gr = new GlideRecord('sys_user');
gr.addQuery('sys_id',u);
gr.query();
while (gr.next()) {    
    //add script here
}

//Getting user data form ServerSide Scripts:
// GlideSystem
var userFile = gs.getUser();  

//Function to get user displayValue in a table
function GetIDValue(table, displayValue) { 
  var rec = new GlideRecord(table);
  var dn = gs.getDisplayColumn(table);
  if (rec.get(dn, displayValue))
      return rec.sys_id;
  else
      return null;
}

//
var value = gs.getDisplayValueFor(current.getTableName(),current.getValue('sys_id'),'number');


//using GlideAjax API to retrieve information from user that
//is not in the client current form. 

//The AbstractAjaxProcessor class is part of the Global Scope.
//The GetEmailAddress Script Include is in the NeedIt scope.
//To extend the AbstractAjaxProcessor, the class must be
//prepended by the scope: global.AbstractAjaxProcessor. 
//The new class defines a method called getEmail.

var GetEmailAddress = Class.create();
//Extend the global.AbstractAjaxProcessor class
GetEmailAddress.prototype = 
Object.extendsObject (global.AbstractAjaxProcessor,{
  //Define the getEmail function.
  //Create a GlideRecord for the User table.
  //Use the sysparm_userID passed from the client side to 
  //retrieve a record from the User table.
  //Return the email address for the requested record
  getEmail: function(){
    var userRecord = new GlideRecord("sys_user");
    userRecord.get(this.getParameter('sysparm_userID'));
    return userRecord.email + '';
  },
  type:'GetEmailAddress'
});


//Client script logic to call the GetEmailAddress class
var getEmailAddr = new GlideAjax('GetEmailAddress');
//Specify the getEmail method
getEmailAddr.addParam('sysparm_name', 'getEmail');
//Pass the "Requested for" sys_id
getEmailAddr.addParam('sysparm_userID', g_form.getValue('u_requested_for'));
//Send the request to the server
getEmailAddr.getXML(populateEmailField);

//When the response is back from the server
function populateEmailField(response){
  //Extract the email address from the response, clear any
  //value form the email field, set the new value in the email field
  var emailFromScriptInclude = response.responseXML.documentElement.getAttribute("answeer");
  g_form.clearValue('u_requested_for_email');
  g_form.setValue('u_requested_for_email', emailFromScriptInclude);
}



//********************************************************************** */

//GI - ACL do tipo 'read' para tabela Reuniões Check-In

// Se for formulário de inclusão de novo registro, retorna true
var answer = false;
if (current.isNewRecord()){
answer = true;    
} else {
      //Pega matricula usuário -user_name- e busca cargo -u_title_code-, e Uor equipe -department-, e prefixo -u_dependencia-
      var user = gs.getUserName();
      var gr = new GlideRecord('sys_user');
      gr.addQuery('user_name', user);
      gr.query();
      if (gr.next()){
            var userCargo = gr.getValue('u_title_code');
            var userUor = gr.getDisplayValue('department');
            var prefixo = gr.getValue('u_dependencia');
      }
      //Se UOR cargo = 3003-diretos ou 12010-executivo retorna true
      if (userCargo == '3003'|| userCargo == '12010' ){
            answer = true;
      }
      //Se UOR equipe = CESUP PROJ/AT AN ou CESUP PROJ/AT AN ou DISEC/GOV. AUTOMACAO retorna true
      else if (userUor == 'CESUP PROJ/AT AN'|| userUor == 'DISEC/CAPAC. PERFORM' || userUor == 'DISEC/GOV. AUTOMACAO'){
            answer = true;
      }
      //Senão busca prefixo pela matricula logada e compara com prefixo do indicador da tabela, se for igual retorna true
      else{
      var prefixoInd = current.getValue('prefixo');
      if (prefixo==prefixoInd) {
            answer = true;
      }
      }
}
answer;




