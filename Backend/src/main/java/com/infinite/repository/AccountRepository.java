package com.infinite.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.infinite.pojo.Account;

//Extending Jpa Repository
@Repository
public interface AccountRepository extends JpaRepository<Account, Long>{

	
}
