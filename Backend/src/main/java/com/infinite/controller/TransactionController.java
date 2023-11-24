package com.infinite.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.infinite.pojo.Transactions;
import com.infinite.repository.TransactionRepository;
import com.infinite.service.TransactionService;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api")
public class TransactionController {

	@Autowired
	private TransactionRepository transRepo;

	@Autowired
	private TransactionService tranServ;

	//creating the account
	@PostMapping("/transactions/save")
	public Transactions createAccount(@RequestBody Transactions account) {
		return tranServ.createAccount(account);
	}
	
	//getting the details from the transactions page
	@GetMapping("/transactions/details")
	public List<Transactions> FindDetails() {
		return transRepo.findAll();
	}

	//get account id from the table
	@GetMapping("/transactions/{accountid}")
	public Transactions getAccount(@PathVariable long accountid) {
		return tranServ.getAccountid(accountid).orElseThrow(() -> new RuntimeException("Account not found"));
	}

	//get the accountid and amount from the front end and calling deposit method
	@PostMapping("/transactions/deposit/{accountid}")
    public ResponseEntity<String> deposit(@PathVariable Long accountid, @RequestBody Map<String, Integer> request) {
        int amount = request.get("amount");
        tranServ.deposit(accountid, amount);
        return new ResponseEntity<>("Success",HttpStatus.OK);
    }

	//Getting the accountid and amount and calling withdraw method
	@PostMapping("/transactions/withdraw/{accountid}")
	public Transactions withdraw(@PathVariable Long accountid, @RequestBody Map<String, Integer> request) {
		int amount = request.get("amount");
		return tranServ.withdraw(accountid, amount);
	}
}
