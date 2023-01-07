const balance = document.getElementById('balance');

const incAmt = document.getElementById('inc-amt');
const expAmt = document.getElementById('exp-amt');

const histList = document.getElementById('list');


const addTransactionsButton = document.getElementById('transac-btn');



/*addTransactionsButton.addEventListener('click',function(){

});*/

const transDetails = document.getElementById('transac-details');
const amount = document.getElementById('amount');


addTransactionsButton.addEventListener('click', function(){

    
    const sign = amount.value < 0 ? "-" : "+";

    const item = document.createElement("li");

    item.classList.add(
        (amount.value > 0) ? "plus" : "minus"
    );

    item.innerHTML = `
        ${transDetails.value}<span>${sign}$${Math.abs(amount.value)}</span>
        <button class="delete-btn" style = "font-size:17px; width: 25px; ">
                            <i class="fa fa-close"></i>
                        </button>`;

    histList.appendChild(item);

    transDetails.value = "";
    amount.value = "";

    
});