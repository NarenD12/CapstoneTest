package com.infinite.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infinite.pojo.Transactions;
import com.infinite.repository.TransactionRepository;

@Service
public class TransactionService {

	@Autowired
	private TransactionRepository tranRepo;
	
	public Transactions createAccount(Transactions account) {
	        return tranRepo.save(account);
	    }
	
//	public List<Transactions> findAll(){
//		return tranRepo.findAll();
//	}
	
	public Optional<Transactions> getAccountid(Long accountid) {
        return tranRepo.findByAccountid(accountid);
    }
	
	public Transactions deposit(Long accountid, int amount) {
        Transactions account = getAccountid(accountid).orElseThrow(() -> new RuntimeException("Account not found"));
        account.setBalance(account.getBalance() + amount);
        return tranRepo.save(account);
    }
	
	public Transactions withdraw(Long accountid, int amount) {
		Transactions account = getAccountid(accountid).orElseThrow(() -> new RuntimeException("Account not found"));
        if (account.getBalance() < amount) {
            throw new RuntimeException("Insufficient funds");
        }
        account.setBalance(account.getBalance() - amount);
        return tranRepo.save(account);
    }
}
