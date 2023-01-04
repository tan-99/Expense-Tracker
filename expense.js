const balance = document.getElementById('balance');

const incAmt = document.getElementById('inc-amt');
const expAmt = document.getElementById('exp-amt');

const list = document.getElementById('list');


const addTransactionsButton = document.getElementById('transac-btn');



/*addTransactionsButton.addEventListener('click',function(){

});*/


addTransactionsButton.addEventListener('click', function(){

    const transDetails = document.getElementById('transac-details').value;
    const amount = document.getElementById('amount').value;
    
    const sign = amount < 0 ? "-" : "+";

    const item = document.createElement("li");

    item.classList.add(
        amount < 0 ? "minus" : "plus";
    );

    item.innerHTML = `
        ${transaction.text}<span>${sign}${Math.abs(amount)}</span>

        `;

    hist-list.appendChild(item);

    
});