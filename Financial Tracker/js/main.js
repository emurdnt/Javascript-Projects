// Enter JavaScript for the exercise here...
//Event listener for the submit
var transactions =  document.querySelector('tbody');
var error = document.querySelector('.error');
var amountCredit = document.querySelector('.total.credits');
var amountDebit = document.querySelector('.total.debits');
var totalDebit =0, totalCredit =0;

//add timer
document.querySelector('.frm-transactions').addEventListener('submit', function (evt) {
	
	var row, 
		description,
		descriptionText,
		descriptionValue,
		type, 
		typeText,
		typeValue,
		amount,
		amountText,
		amountValue,
		tools,
		toolsSymbol;

	descriptionText = evt.target.elements['description'].value;
	typeText =  evt.target.elements['type'].value;
	amountText =  evt.target.elements['currency'].value;

	if(typeText != "" && amountText != ""){
		//creating elements
		row =  document.createElement('tr');
		description = document.createElement('td');
		type = document.createElement('td');
		amount = document.createElement('td');
		tools = document.createElement('td');
		toolsSymbol = document.createElement('i');
		//creating textnodes
		descriptionValue=  document.createTextNode(descriptionText);
		typeValue = document.createTextNode(typeText);
		amountValue =  document.createTextNode('$'+ financial(amountText));
		//setting classes
		amount.setAttribute('class', 'amount');
		tools.setAttribute('class', 'tools');
		toolsSymbol.setAttribute('class','delete fa fa-trash-o');
		//appending children
		tools.appendChild(toolsSymbol);
		amount.appendChild(amountValue);
		type.appendChild(typeValue);
		description.appendChild(descriptionValue);
		row.appendChild(description);
		row.appendChild(type);
		row.appendChild(amount);
		row.appendChild(tools);

		transactions.appendChild(row);
		error.innerText = " ";

		if(typeText == 'credit'){ 
			row.setAttribute('class','credit');
			totalCredit += parseFloat(amountText);
			amountCredit.innerText = '$'+ financial(totalCredit);

			
			
		} else {
			
			row.setAttribute('class','debit');
			totalDebit += parseFloat(amountText);
			amountDebit.innerText = '$' + financial(totalDebit);
			
		}


	} else{
		if(error.innerText != " "){
			error.innerText ='Adding transaction failed.' ;
		}
		
	}
	evt.target.reset();
	evt.preventDefault();
	

});

function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}

document.querySelector('tbody').addEventListener('click', function (evt) { 
	var targetTransaction = evt.target.parentNode; 
	var transactionList = targetTransaction.parentNode;
	var text = targetTransaction.previousSibling.innerText;
	var money = text.slice(1,text.length);

	if(transactionList.classList.contains('credit')){

		var newCredit = totalCredit - parseFloat(money);
		amountCredit.innerText = '$'+ financial(newCredit);

	} else{

		var newDebit = totalDebit - parseFloat(money);
		amountDebit.innerText = '$'+ financial(newDebit);
	}

	transactions.removeChild(transactionList);
	
});

var inactivityTime = setTimeout( function () {
    var t;
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;

    function inactive() {
        alert("You have been inactive for 2 minutes.")
    }

    function resetTimer() {
        clearTimeout(t);
        t = setTimeout(inactive, 120000)
    }
}, 120000);






