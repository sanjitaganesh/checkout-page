let quantity=1;
const price=10;

function updateTotal(){
  const subtotal=quantity*price;
  const tax=subtotal*0.10;
  const total=subtotal+tax;


document.getElementById("qty").value = quantity;
document.getElementById("subtotal").textContent=subtotal.toFixed(2);
document.getElementById("tax").textContent=tax.toFixed(2);
document.getElementById("total").textContent=total.toFixed(2);
}
function increase(){
  quantity++;
  updateTotal();
}

function decrease(){
  if(quantity>1){
    quantity--;
    updateTotal();
  }
}

function validate(){
  const card=document.getElementById("card").value;
  const cleanedCard=card.replace(/\D/g,"");
  const cvv=document.getElementById("cvv").value;

if(cleanedCard.length!=16){
  alert("Card number must be 16 digits");
  return false;
}

if(cvv.length!=3){
  alert("CVV must be 3 digits");
  return false;
}
alert("Payment successful!");
return false;
}
