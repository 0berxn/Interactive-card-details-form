const inputcardname = document.getElementById('input-card-name');
const inputcardnumber = document.getElementById('input-card-number');
const inputcardexpmm = document.getElementById('input-card-exp-mm');
const inputcardexpyy = document.getElementById('input-card-exp-yy');
const inputcardcvc = document.getElementById('input-card-cvc')
const cardname = document.getElementById('card-name');
const cardnumber = document.getElementById('card-number');
const cardexpmm = document.getElementById('card-exp-mm');
const cardexpyy = document.getElementById('card-exp-yy');
const cardcvc = document.getElementById('card-cvc');
const btn1 = document.getElementById('bnt-1');


inputcardname.addEventListener('change' , (e)=>{
    cardname.textContent = e.target.value;
})

inputcardnumber.addEventListener('change', (e)=>{
    cardnumber.textContent = e.target.value;
})
inputcardexpmm.addEventListener('change', (e)=>{
    cardexpmm.textContent = e.target.value;
})
inputcardexpyy.addEventListener('change', (e)=>{
    cardexpyy.textContent = e.target.value;
})
inputcardcvc.addEventListener('change', (e)=>{
    cardcvc.textContent = e.target.value;
})