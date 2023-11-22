package com.infinite.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.infinite.pojo.Transactions;

@Repository 
public interface TransactionRepository extends JpaRepository<Transactions, Integer> {

}
