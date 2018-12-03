function getBalance() {
	'use strict';
	var web3 = window.web3 ? new Web3(window.web3.currentProvider) : new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/E5WpJBGNnhJYUFLBattT"));
	var address = document.getElementById("address").value;
	
	try {
		web3.eth.getBalance(address, function (error, wei) {
			if (!error) {
				var balance = web3.fromWei(wei, 'ether');
				document.getElementById("output").innerHTML = balance + " ETH";
			}
//			console.log(balance.toString(10));
		})
	} catch (err) {
		document.getElementById("output").innerHTML = err;
	}
	return;
}