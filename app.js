// update number
function updateNumber(isIncreasing, price, domSelector, priceUpdate){
    const numberId = document.getElementById(domSelector);
    let productCount = numberId.value;
     
    if(isIncreasing==true){
        productCount = parseInt(productCount)+1;
    }else if(productCount>0){
        productCount = parseInt(productCount)-1;
    }
    numberId.value = productCount;

    const mainPrice = document.getElementById(priceUpdate);
    mainPrice.innerText = productCount*(price);

    calculateTotal();
}
function getExistingValue(id){
    const existingInput = document.getElementById(id);
    const existingNumber = parseInt(existingInput.value);

    return existingNumber;
}
function calculateTotal(){
    const phoneTotal = getExistingValue('phone-number')*1219;
    const caseTotal = getExistingValue('case-number')*59;
    const subTotal = phoneTotal+caseTotal;
    const tax = subTotal/5;
    const totalAmount = subTotal+tax;

    // update subTotal
    document.getElementById('sub-total').innerText=subTotal;
    // tax
    document.getElementById('total-tax').innerText = tax;
    // total amount
    document.getElementById('total-price').innerText = totalAmount;

}
// phone section
document.getElementById('phone-plus').addEventListener('click', phonePlus);
function phonePlus(){
    // phone plus
    updateNumber(true, 1219, 'phone-number', 'phone-total');
}
document.getElementById('phone-minus').addEventListener('click', phoneMinus);
function phoneMinus(){
    // phone minus
    updateNumber(false, 1219, 'phone-number', 'phone-total');
}

// phoneCase section
document.getElementById('case-plus').addEventListener('click', casePlus);
function casePlus(){
    updateNumber(true, 59, 'case-number', 'case-total');
}
// phoneMinus event
document.getElementById('case-minus').addEventListener('click', caseMinus);
function caseMinus(){
    updateNumber(false, 59, 'case-number', 'case-total');
}
