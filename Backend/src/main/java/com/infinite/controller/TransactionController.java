package com.infinite.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.infinite.pojo.Transactions;
import com.infinite.repository.TransactionRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api")
public class TransactionController {

	@Autowired
	private TransactionRepository transRepo;
	
	@PostMapping("/transactions/save")
	public Transactions saveTrans(@RequestBody Transactions trans) {
		return transRepo.save(trans);
	}
	
	@GetMapping("/transactions/details")
	public List<Transactions> getTrans() {
		return transRepo.findAll();
	}
}
