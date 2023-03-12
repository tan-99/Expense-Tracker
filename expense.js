var state = {
    balance: 0,
    earning: 0,
    expense:  0,
    transaction: [],
    // transaction: [{details: 'Salary', amount: 2400, type: 'earning'},
    //               {details: 'Grocery', amount: 350, type: 'expense'},
    //               {details: 'Bonus', amount: 1300, type: 'earning'},
    //               {details: 'Furniture', amount: 560, type: 'expense'},
    //               {details: 'Eating out', amount: 89, type: 'expense'} 
};

var balanceEl = document.getElementById('balance');
var earningEl = document.getElementById('earn-amt');
var expenseEl = document.getElementById('exp-amt');
var transactionEl = document.getElementById('list'); 
var earningBtnEl = document.getElementById('transac-earning-btn');
var expenseBtnEl = document.getElementById('transac-expense-btn');
var nameInputEl = document.getElementById('transac-details');
var amountInputEl = document.getElementById('amount'); 

//id generator function
function uniqueId(){
    return Math.round(Math.random()*100000);
}

//initialising function
function init(){

    var localState = JSON.parse(localStorage.getItem('expenseTrackerState'));

    if(localState !== null){
        state = localState;
    }
    
    updateState();
    initListeners();
}

init();

//function used for state manipulation
function updateState(){
    //only for state manipulation
    var balance = 0,
        earning = 0,
        expense = 0,
        item;

        for(var i = 0; i < state.transaction.length; i++){

            item = state.transaction[i];
            if(item.type == 'earning'){
                earning += item.amount;
                balance += item.amount;
            }
            else if(item.type == 'expense'){
                expense += item.amount;
                balance -= item.amount;
            }
    
    
            console.log(item);
            state.balance = balance;
            state.earning = earning;
            state.expense = expense;
    
        }

        if(state.transaction.length === 0){
            state.balance = 0;
            state.earning = 0;
            state.expense = 0;
        }
        
        
        localStorage.setItem('expenseTrackerState', JSON.stringify(state));

    render();
}

//function to listen for events
function initListeners(){

    earningBtnEl.addEventListener('click',onAddEarningClick);
    expenseBtnEl.addEventListener('click',onAddExpenseClick);    
}

function onAddEarningClick(){

    addTransaction(nameInputEl.value, amount.value, 'earning');    
}

function onAddExpenseClick(){
    
    addTransaction(nameInputEl.value, amount.value, 'expense');
}

function addTransaction(details, amount, type){

    var id = uniqueId();

    //if none has been entered

    if(amount == "" && details == ""){
        alert("Enter transaction details and amount !");
    } 

    //if only amount has been entered

    else if(amount != "" && details == ""){
        alert("Enter transaction details!");
    }
    
    //if only transaction-details have been entered

    else if(amount =="" && details != ""){
        alert("Enter amount!");
    }

    else{
        var transaction = { 
            id: id,
            details: details, 
            amount: parseInt(amount), 
            type: type,}
    
        /*typeof(amountInputEl.value)
        'string' */
    
        state.transaction.push(transaction);
        updateState();
    
        nameInputEl.value = '';
        amountInputEl.value = "";
    }

}

function onClickDelete(event){

    // console.log('why event not working')
    console.log(event.target.parentNode);
    var btnTarget = event.target.parentNode;
    var id = parseInt(btnTarget.getAttribute('data-id')); //getAttribute returns a string
    console.log(id);

    //The splice() method in JavaScript is used to add or remove elements from an array. 
    //It can modify the original array and return the removed elements as a new array.

    var deleteIndex;
    for(var i = 0; i < state.transaction.length; i++){
        if(state.transaction[i].id === id){
            deleteIndex = i;
            break;
        }
    }

    state.transaction.splice(deleteIndex, 1);

    updateState();
}

function render(){

    balanceEl.innerHTML = `$${state.balance}`;
    earningEl.innerHTML = `$${state.earning}`;
    expenseEl.innerHTML = `$${state.expense}`;

    var listEl, item, btnEl;

    transactionEl.innerHTML = '';

    for(var i = 0; i < state.transaction.length; i++){
        
        item = state.transaction[i];
        listEl = document.createElement('li');

        if(item.type=='earning'){
            listEl.classList.add("hist-list","plus");
        }
        else{
            listEl.classList.add("hist-list","minus");
        } 

        listEl.innerHTML=`${item.details}<span>$${item.amount}</span>`;
        

        btnEl = document.createElement('button');
        btnEl.className="delete-btn";

        btnEl.innerHTML=`<i class="fa fa-close"></i>`;
        btnEl.setAttribute('data-id',item.id);
        
        btnEl.style.cssText="font-size:17px; width: 25px; ";
        btnEl.addEventListener('click', onClickDelete);
        


        listEl.appendChild(btnEl);

        transactionEl.append(listEl);
        console.log("why");

    }

}
