package com.infinite.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.infinite.pojo.LoginFront;
import com.infinite.pojo.LoginMessage;
import com.infinite.pojo.User;
import com.infinite.repository.UserRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {
	
	@Autowired
	private UserRepository userRepo;
	
	@GetMapping("/user/all")
	public List<User> getUsers(){
		return userRepo.findAll();
	}
	
	@PostMapping("/user/save")
	public User createUser(@RequestBody User user) {
		return userRepo.save(user);
	}
	
	@PostMapping(path = "/user/login")
	public LoginMessage loginEmployee(@RequestBody LoginFront loginFront) {
		User useremail = userRepo.findByEmail(loginFront.getEmail());
		if (useremail != null) {
			String password = loginFront.getPassword();
			String emppass = useremail.getPassword();
			if ( password.matches(emppass)) {
				return new LoginMessage("Login Success", true);
			} else {
				return new LoginMessage("Incorrect emailId or Password", false);
			}
		} else {
			return new LoginMessage("emailId not exist", false);
		}
	}
	
}
