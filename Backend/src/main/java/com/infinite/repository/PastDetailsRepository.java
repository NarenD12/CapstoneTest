package com.infinite.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.infinite.pojo.PastDetails;

//Extending Jpa Repository

@Repository
public interface PastDetailsRepository extends JpaRepository<PastDetails, Long> {

}
