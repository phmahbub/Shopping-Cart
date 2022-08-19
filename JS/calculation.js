//btn-phone-plus event handler
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const increaseNewNumber = increaseFieldValueById('phone-number')
    const newPhonePrice = increaseNewNumber*1219
    updatePriceById('phone-price', newPhonePrice)
})
//btn-phone-minus event handler
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const decreaseNewNumber = decreaseFieldValueById('phone-number')
    const newPhonePrice = decreaseNewNumber*1219
    updatePriceById('phone-price', newPhonePrice)
})

//btn-case-plus event handler
document.getElementById('btn-case-plus').addEventListener('click', function(){
    const increaseNewNumber = increaseFieldValueById('case-number')
    const newCasePrice = increaseNewNumber*59
    updatePriceById('case-price', newCasePrice)
})

//btn-case-minus event handler
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const decreaseNewNumber = decreaseFieldValueById('case-number')
    const newCasePrice = decreaseNewNumber*59
    updatePriceById('case-price', newCasePrice)
})
// checkout button event handler
document.getElementById('btn-checkout').addEventListener('click', function(){
 // subtotal calculation   
    const updatePhonePrice = getGadgetPriceById('phone-price')
    const updatecasePrice = getGadgetPriceById('case-price')
    const subTotal = (updatePhonePrice+updatecasePrice)
    updatePriceById('subtotal-amount', subTotal.toFixed(2))
// tax calculation 
    const taxAmount = (subTotal * 0.15)
    updatePriceById('tax-amount', taxAmount.toFixed(2))
// total calculation 
    const totalAmount = parseFloat(subTotal + taxAmount)
    updatePriceById('total-amount', totalAmount.toFixed(2) )
})