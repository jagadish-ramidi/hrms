package com.hr.backend.api;

import java.rmi.ServerException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.hr.backend.entity.UserEntity;
import com.hr.backend.entity.UserType;
import com.hr.backend.model.UserSummaryRequest;
import com.hr.backend.model.UserSummaryResponse;
import com.hr.backend.repository.UserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
@RequestMapping("/users")
public class UserController {

	@Autowired
	public UserRepository userRepository;

	@GetMapping("/{userId}")
	public Optional<UserEntity> getUserByID(@PathVariable("userId") long userId) {
		return userRepository.findById(userId);
	}
	
	@RequestMapping(value = "/", method = RequestMethod.POST)
	public void addNewUser(@RequestBody UserEntity user) throws ServerException {
		if(null == user) {
			throw new IllegalArgumentException("User object is null");
		}
		try {
			userRepository.saveAndFlush(user);
		}catch (Exception e) {
			throw new ServerException(e.getMessage());
		}
	}
	
	@DeleteMapping("/{userId}")
	public void deleteUserById(@PathVariable("userId") long userId) {
		userRepository.deleteById(userId);
	}
	
	@RequestMapping(value = "/{userId}", method = RequestMethod.PUT)
	public void updateUserById(@PathVariable("userId") long userId, @RequestBody UserEntity user) {
		user.setId(userId);
		userRepository.saveAndFlush(user);
	}
	
	@RequestMapping(value = "/summary", method = RequestMethod.GET)
	public List<UserEntity> getUserSummary(@RequestParam("name") String name,@RequestParam("userType") UserType userType) {
		
		List<UserEntity> a = userRepository.findByUserType(userType);
		
		return a;
	}

}