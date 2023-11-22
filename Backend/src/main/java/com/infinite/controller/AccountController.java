package com.infinite.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.infinite.pojo.Account;
import com.infinite.repository.AccountRepository;

@CrossOrigin(origins="http://localhost:3000/")
@RestController
public class AccountController {

	@Autowired
	AccountRepository accRepo;
	
	@PostMapping("/Accounts")
	public Account SaveAccount(@RequestBody Account acc) {
		return accRepo.save(acc);
	}
	@GetMapping("/Account/Details")
	public List<Account> getAccount(){
		return accRepo.findAll();
	}

}