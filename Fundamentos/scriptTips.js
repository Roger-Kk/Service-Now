
//HOW TO HIDE "i" - INFORMATION NEXT A REFERENCE FIELD

// Go to Service Portals > Portal > Select you portal
// on CSS Variables include this lines of code: 
/*

.add-on > button.lookup {
    display: none;
}
.field-has-reference .reference {
    display: block;
}
*/

//*************************************************************/

//REFERENCE QUAL QUALIFIER TO SET SUBCATEGORY FOLLOW CATEGORY FILTER
//ON A FORM

//On 'Reference qual' field in a variable or field, include de following script: 
// javascript:if(current.variables.nome_category_field!='')"category="+current.vatiables.nome_category_field


//************************************************************/

//UI POLICY SCRIPT TO SET A MESSAGE IN FIELD UNDER CONDITION

//On a UI Policy, set the conditions and mark the option 'run script'
//then include the following lines: 

/*function onCondition(){
    g_form.setValue ('field', '') //deixa campos em branco
    g_form.showFieldMsg('field', 'Message here');
}
*/



