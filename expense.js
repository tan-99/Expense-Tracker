const balance = document.getElementById('balance');

const incAmt = document.getElementById('inc-amt');
const expAmt = document.getElementById('exp-amt');

const histList = document.getElementById('list');


const addTransactionsButton = document.getElementById('transac-btn');



/*addTransactionsButton.addEventListener('click',function(){

});*/


addTransactionsButton.addEventListener('click', function(){

    const transDetails = document.getElementById('transac-details').value;
    const amount = document.getElementById('amount').value;
    
    const sign = amount < 0 ? "-" : "+";

    const item = document.createElement("li");

    item.classList.add(
        amount < 0 ? ["minus", "ml-n1", "p-2", "mb-2"] : "plus"
    );

    item.innerHTML = `
        ${transDetails}<span>${sign}${Math.abs(amount)}</span>
        <button class="delete-btn" style = "font-size:17px; width: 25px; ">
                            <i class="fa fa-close"></i>
                        </button>`;

    histList.appendChild(item);

    
});