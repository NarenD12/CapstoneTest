package com.infinite.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.infinite.pojo.PastDetails;
import com.infinite.repository.PastDetailsRepository;
//Crossorigin allows to interact with frontend(react app)
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api")
public class PastController {

	@Autowired
	private PastDetailsRepository pastRepo;
	
	//Saving the details into Past_Details table  
	@PostMapping("/past/save")
	public PastDetails createPast(@RequestBody PastDetails past) {
		return pastRepo.save(past);
	}
	
	//Getting the details from the table
	@GetMapping("/past/details")
	public List<PastDetails> getPast(){
		return pastRepo.findAll();
	}
}
