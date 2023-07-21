function onLoad() {

    alert('Current state value is: ' 
    + g_form.getValue('state'));
  
  }

//Call another UI Action in "Action name" field UI Action
gsftSubmit(gel('ui_action_name'))
gsftSubmit(null, g_form.getFormElement(), 'ui_action_name')

//Function in UI Action to redirect to other page
// action.setRedirectURL();



//Set field to mandatory when priority changes
function onChange(control, oldValue, newValue){
  if (oldValue == newValue)
    return;
    g_form.setMandatory('field_name', true);
}


//G_FORM 

// getValue() and setValue() methods:
var category = g_form.getValue('category');

var newCategory = 'software';
g_form.setValue('category', newCategory);

// getReference() method and callback function
var caller = g_form.getReference('caller_id', callerCallback);
function callerCallback(caller){
  g_form.setValue('description', caller.first_name + ' ' + caller.last_name + 'says hello.');
}

// GlideAjax / Callback function

//1 - Criar script include com a função que acessa dados no lado do 
// servidor;
// Marcar como 'Client Callabe';
// exemplo Script Include : 
var ServiceNow201GlideAjax = Class.create();
ServiceNow201GlideAjax.prototype = Object.extendsObject(AbstractAjaxProcessor,{
  
  getIncidentStatus: function(){
    var incidentNumber = this.getParameter('sysparm_incident_number');
    if(!gs.nil(incidentNumber)){
      var incidentGR = new GlideRecord('incident');
      incidentGR.get('number', incidentNumber);
      return incidentGR.state.getDisplayValue();
    } else {
      return 'No incident was found';
    }
  },

  getLatestIncidents: function() {
    var incidents = [];
    var limit = parseInt(this.getParameter ('sysparm_limit'));
    if (!gs.nil(limit) && typeof limit == 'number'){
      var incidentGR = new GlideRecord ('incident');
      incidentGR.orderByDesc('sys_created_on');
      incidentGR.setLimit(limit);
      incidentGR.query();
      while (incidentGR.next()){
        var record = {};
        record.number = incidentGR.number.getDisplayValue();
        record.sysID = incidentGR.sys_id.getDisplayValue();
        record.shortDescription = incidentGR.short_description.getDisplayValue();
        incidents.push(record);
      } 
      return new JSON().encode(incidents);
    } else{
      return 'Something \'t right...';
    }
  },
  
  sayHello: function(){
    return 'Hello World';
  },
  type: 'ServiceNow201glideAjax'
})

//exemplo Client Script:
function onLoad(){
  var ga = new GlideAjax ('ServiceNow201GlideAjax');
  ga.addParam ('sysparm_name', 'sayHello');
  ga.getXML(ajaxProcessor);
}

function ajaxProcessor(response){
  var answer = response.responseXML.documentElement.getAttribute('answer');
  g_form.setValue('short_description', answer);
}

//On Change Client Script to auto populate fields based on a reference field

function onChange(control, oldValue, newValue, isLoading){
  if (isLoading || newValue == ''){
    return;
  }
  var xxx = g_form.getReference('campo_referencia', nome_funcao);

  function nome_funcao(xxx){
    g_form.setValue('outro_campo_1', xxx.campo);
    g_form.setValue('outro_campo_2', xxx.campo2);
    g_form.setValue('outro_campo_3', xxx.campo3);
  }

}













