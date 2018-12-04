function getBalance() {
	'use strict';
	var Web3 = require('web3');
	var web3 = new Web3();
	web3.setProvider(new web3.providers.HttpProvider( "http://188.190.240.195:8545"))
	var address = document.getElementById("address").value;
	console.log(address);
	
	try {
		web3.eth.getBalance(address, function (error, wei) {
			if (!error) {
				var balance = web3.fromWei(wei, 'ether');
				document.getElementById("output").innerHTML = balance + " ETH";
				var gwei = web3.fromWei(wei, 'wei');
				document.getElementById("output_wei").innerHTML = wei.toString(10) + " WEI";
			}
		})
	} catch (err) {
		document.getElementById("output").innerHTML = err;
	}
	return;
}
