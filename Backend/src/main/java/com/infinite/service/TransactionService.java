package com.infinite.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infinite.pojo.Transactions;
import com.infinite.repository.TransactionRepository;

@Service
public class TransactionService {
//service layer
	
	@Autowired
	private TransactionRepository tranRepo;
	
	public Transactions createAccount(Transactions account) {
		//method to createaccount
	        return tranRepo.save(account);
	    }
	
//	public List<Transactions> findAll(){
//		return tranRepo.findAll();
//	}
	
	//to pull data of particular account id using findbyaccountid
	public Optional<Transactions> getAccountid(Long accountid) {
		
        return tranRepo.findByAccountid(accountid);
    }
	
	//deposit method 
	public Transactions deposit(Long accountid, int amount) {
        Transactions account = getAccountid(accountid).orElseThrow(() -> new RuntimeException("Account not found"));
        account.setBalance(account.getBalance() + amount);//storing balance in account.setbalance
        return tranRepo.save(account);
    }
	
	//method to withdraw 
	public Transactions withdraw(Long accountid, int amount) {
		
		Transactions account = getAccountid(accountid).orElseThrow(() -> new RuntimeException("Account not found"));
        if (account.getBalance() < amount) {
            throw new RuntimeException("Insufficient funds");
        }
        account.setBalance(account.getBalance() - amount);
        return tranRepo.save(account);
    }
}
