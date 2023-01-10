var balance = document.getElementById('balance');

var earnAmt = document.getElementById('earn-amt');

var expAmt = document.getElementById('exp-amt');

const histList = document.getElementById('list');


const addTransactionsButton = document.getElementById('transac-btn');



/*addTransactionsButton.addEventListener('click',function(){

});*/

const transDetails = document.getElementById('transac-details');
const amount = document.getElementById('amount');
var strBal = balance.innerText;
var strEarn = earnAmt.innerText;
var strExp = expAmt.innerText;

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
        
        strBal = strBal.replace('$','');
        strBal = (Number(strBal) + Number(amount.value));
        strBal = strBal.toString();

        balance.innerHTML = `<p class = "fs-1 fw-bold" id = "balance">$${strBal}</p>`;

        //updation
        
        if(amount.value > 0){

            strEarn = strEarn.replace('+$','');
            strEarn = (Number(strEarn) + Number(amount.value));
            strEarn = strEarn.toString();

            earnAmt.innerHTML = `<h4 id = "earn-amt" class = "earn-amt text-center fw-bold">+$${strEarn}</h4>`;
        }
        else{

            strExp = strExp.replace('-$','');
            strExp = (Number(strExp) + Math.abs(Number(amount.value)));
            strExp = strExp.toString();

            expAmt.innerHTML = `<h4 id = "exp-amt" class = "exp-amt text-center fw-bold">-$${strExp}</h4>`;

        }



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