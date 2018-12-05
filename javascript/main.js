function getBalance() {
	'use strict';
	var Web3 = require('web3');
	var web3 = new Web3();
	web3.setProvider(new web3.providers.HttpProvider())
	var address = document.getElementById("address").value;
	
	try {
		web3.eth.getBalance(address, function (error, wei) {
			if (!error) {
				var balance = web3.fromWei(wei, 'ether');
				document.getElementById("output").innerHTML = balance + " ETH";
				var wei_balance = web3.fromWei(wei, 'wei');
				document.getElementById("output_wei").innerHTML = wei_balance + " WEI";
			}
		})
	} catch (err) {
		document.getElementById("output").innerHTML = err;
	}
	return;
}
