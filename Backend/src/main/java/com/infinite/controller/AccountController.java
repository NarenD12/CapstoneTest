package com.infinite.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.infinite.repository.AccountRepository;
//crosssorigin allows to interact with frontend(react app)
@CrossOrigin(origins="http://localhost:3000/")
@RestController
public class AccountController {

	@Autowired
	AccountRepository accRepo;  //addind automatic dependency through autowiring
//	
//	@PostMapping("/Accounts")
//	public Account SaveAccount(@RequestBody Account acc) {
//		return accRepo.save(acc);
//	}
//	@GetMapping("/Account/Details")
//	public List<Account> getAccount(){
//		return accRepo.findAll();
//	}

}