var balance = document.getElementById('balance');

const incAmt = document.getElementById('inc-amt');
const expAmt = document.getElementById('exp-amt');

const histList = document.getElementById('list');


const addTransactionsButton = document.getElementById('transac-btn');



/*addTransactionsButton.addEventListener('click',function(){

});*/

const transDetails = document.getElementById('transac-details');
const amount = document.getElementById('amount');
var str = balance.innerText;

addTransactionsButton.addEventListener('click', function(){

    //if only amount has been entered

    if(amount.value != "" && transDetails.value == ""){
        alert("Enter transaction details!");
    }
    
    //if only transaction-details have been entered

    else if(amount.value=="" && transDetails.value != ""){
        alert("Enter amount!");
    }

    //if both - transaction-details and amount is entered

    else if(amount.value != "" && transDetails.value != ""){

        const sign = amount.value < 0 ? "-" : "+";

        const item = document.createElement("li");

        item.classList.add(
            (amount.value > 0) ? "plus" : "minus"
        );

        //updation of balance
        
        str = str.replace('$','');
        str = (Number(str) + Number(amount.value));
        str = str.toString();

        balance.innerHTML = `<p class = "fs-1 fw-bold" id = "balance">$${str}</p>`;

        //updation of history

        item.innerHTML = `
            ${transDetails.value}<span>${sign}${Math.abs(amount.value)}</span>
            <button class="delete-btn" style = "font-size:17px; width: 25px; ">
                                <i class="fa fa-close"></i>
                            </button>`;

        histList.appendChild(item);

        transDetails.value = "";
        amount.value = "";
    }

    //No input fields are  filled

    else{
        alert('Fill in the required details!');
    }

    
});