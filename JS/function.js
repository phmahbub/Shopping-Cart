
// get product field value 
function getGadgetNumberById(gadgetId){
    const gadgetField = document.getElementById(gadgetId)
    const gadgetNumString = gadgetField.value
    const gadgetNumber = parseInt(gadgetNumString)
    return gadgetNumber 
}
// get product price as text and the convert to number
function getGadgetPriceById(priceId){
    const gadgetPriceField = document.getElementById(priceId)
    const gadgetPriceString = gadgetPriceField.innerText 
    const gadgetPrice = parseFloat(gadgetPriceString)
    return gadgetPrice
}
//set a field with new data 
function setFieldValueById(fieldId, newValue){
    const fieldElement = document.getElementById(fieldId)
    const fieldString = fieldElement.value
    fieldElement.value = newValue
}
//set  innertext data 
function updatePriceById(fieldId, newValue){
    const fieldElement = document.getElementById(fieldId)
    const fieldString = fieldElement.innerText
    fieldElement.innerText = newValue
}
//increase field value with plus button and set it to update the value 
function increaseFieldValueById(plusId){
    const previousNumber = getGadgetNumberById(plusId)
    let newNumber = previousNumber+1
    setFieldValueById(plusId, newNumber)
    return newNumber
}
//decrease field value with plus button and set it to update the value 
function decreaseFieldValueById(minusId){
    const previousNumber = getGadgetNumberById(minusId)
    let newNumber = previousNumber-1
    setFieldValueById(minusId, newNumber)
    return newNumber
}

