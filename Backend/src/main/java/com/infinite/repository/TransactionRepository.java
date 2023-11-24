package com.infinite.repository;

import java.util.Optional;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.infinite.pojo.Transactions;

//Extending Jpa Repository with user defined methods

@Repository 
public interface TransactionRepository extends JpaRepository<Transactions, Long> {

	Optional<Transactions> findByAccountid(Long accountid);
}
