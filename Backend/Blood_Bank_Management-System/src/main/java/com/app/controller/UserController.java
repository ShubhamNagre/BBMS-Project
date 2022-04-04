package com.app.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.exception.ResourceNotFoundException;
//import com.app.model.Attendence;
import com.app.model.User;
import com.app.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1")
public class UserController {
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private MailService notificationService;
	
	private final PasswordEncoder passwordEncoder=new BCryptPasswordEncoder();

	//get all users
	@GetMapping("/user")
	public List<User>getAllUser(){
		return userRepository.findAll();
	}
	
	//create user rest api
	@PostMapping("/user")
	public User createUser(@RequestBody User user) {
		String encodedPassword=new BCryptPasswordEncoder().encode(user.getPassword());
		user.setPassword(encodedPassword);
		notificationService.sendEmail(user);
		User retUser=userRepository.save(user);
		return retUser;
	}
		
	//get user by id rest api
	@GetMapping("/user/{id}")
	public ResponseEntity<User> getUserById(@PathVariable Long id) {
		User user=userRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("User Not Exist with Id="+id));
		return ResponseEntity.ok(user);
	}
	
	@GetMapping("/user/{username}/{password}")
	public ResponseEntity<User> getUserById(@PathVariable String username,@PathVariable String password) {
		User user=userRepository.findByUsername(username);
		User user1=null;
		if (!passwordEncoder.matches(password,user.getPassword())) {
			return ResponseEntity.ok(user1);
		}
//		User user=userRepository.findByUsernameAndPassword(username,encodedPassword).orElseThrow(()->new ResourceNotFoundException("User Not Exist with Username="+username+"and Password"+password));
		return ResponseEntity.ok(user);
	}
	
	@PutMapping("/user/{email}/{mobile}")
	public ResponseEntity<User> getUserByEmail(@PathVariable String email,@PathVariable long mobile){
		User user = userRepository.findByEmailAndMobile(email, mobile);
		return ResponseEntity.ok(user);
	}
	
	//update user rest-api
	@PutMapping("/user/{id}")
	public ResponseEntity <User> updateUser(@PathVariable Long id, @RequestBody User userDetails){
		User user=userRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("User Not Exist with Id="+id));
		user.setAddress(userDetails.getAddress());
		user.setBlood_group(userDetails.getBlood_group());
		user.setAge(userDetails.getAge());
		user.setEmail(userDetails.getEmail());
		user.setGender(userDetails.getGender());
		user.setMobile(userDetails.getMobile());
		user.setFname(userDetails.getFname());
		user.setMname(userDetails.getMname());
		user.setLname(userDetails.getLname());
		String encodedPassword=new BCryptPasswordEncoder().encode(userDetails.getPassword());
		user.setPassword(encodedPassword);
		user.setSubscribe(userDetails.getSubscribe());
		user.setRole(userDetails.getRole());
		user.setDepartment(userDetails.getDepartment());
		user.setUsername(userDetails.getUsername());
//		user.setBloodTestLog(userDetails.getBloodTestLog());
//		user.setRequest(userDetails.getRequest());
		User updatedUser=userRepository.save(user);
		return ResponseEntity.ok(updatedUser);
	}
	
	//delete user rest api
	@DeleteMapping("/user/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id){
		User user=userRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("User Not Exist with Id="+id));
		
		userRepository.delete(user);
		Map<String, Boolean> response=new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
//	//get Staff attendence rest api
//	@GetMapping("/user/attendence/{id}")
//	public ResponseEntity<String> attendence(@PathVariable Long id,@RequestBody boolean p_or_a) {
//		User user=userRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("User Not Exist with Id="+id));
//		Attendence attend=(Attendence) user;
//		attend.additionInAttendence(p_or_a);
//		return ResponseEntity.ok("Attendence Updated Successfully!!!");
//	}
}
