
let balance = 0;

function deposit(amount) {
	if (amount > 0) {
		balance += amount;
		console.log(`Deposited: $${amount}. New balance: $${balance}.`);
	} else {
		console.log("Deposit amount must be positive.");
	}
}


function withdraw(amount) {
	if (amount > 0) {
		if (balance >= amount) {
			balance -= amount;
			console.log(`Withdrew: $${amount}. New balance: $${balance}.`);
		} else {
			console.log("Insufficient balance.");
		}
	} else {
		console.log("Withdrawal amount must be positive.");
	}
}


function checkBalance() {
	console.log(`Current balance: $${balance}.`);
	return balance;
}


deposit(100); 
withdraw(50); 
checkBalance();
withdraw(100); 

