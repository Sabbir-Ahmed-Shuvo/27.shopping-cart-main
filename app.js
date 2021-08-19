
function getProductNumber(product,price, incrasingALl){
    var caseInput = document.getElementById(product + '-number');
    var caseNumber = caseInput.value;
   
    if (incrasingALl == true){
       caseNumber= parseInt (caseNumber) + 1;
    }
    else if(caseNumber > 0){
        caseNumber = parseInt (caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    var caseTotal = document.getElementById( product +'-total');
    caseTotal.innerText = caseNumber * price;
    calculateTotal()
}
function getInputValue(product){
    var phoneInput = document.getElementById( product +'-number');
    var phoneNumber = parseInt(phoneInput.value);
    return phoneNumber;
}

function calculateTotal(){
    
    var phoneTotal =  getInputValue('phone') * 1219;
    var caseTotal =  getInputValue('case') * 59;
    var subtotal = phoneTotal + caseTotal;
    var tax = subtotal / 10;
    var totalPrice = tax + subtotal;


    document.getElementById('sub-total').innerText=subtotal;
    document.getElementById('tax-amount').innerText=tax;
    document.getElementById('total-price').innerText=totalPrice;
}

// this is for phone
document.getElementById('phone-plus').addEventListener('click',function(){
    getProductNumber('phone',1219,true);

})
document.getElementById('phone-minus').addEventListener('click',function(){
   
   
    getProductNumber('phone',1219, false);
})

// this is for case 
document.getElementById('case-plus').addEventListener('click',function(){
    getProductNumber('case',59, true);

})
document.getElementById('case-minus').addEventListener('click',function(){
   
   
    getProductNumber('case',59, false);
})

