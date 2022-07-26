package com.hr.backend.api;

import java.rmi.ServerException;
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
import com.hr.backend.repository.UserRepository;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {

	@Autowired
	private UserRepository userRepository;

	@GetMapping("/users/{userId}")
	public Optional<UserEntity> getUserByID(@PathVariable("userId") long userId) {
		return userRepository.findById(userId);
	}
	
	@PutMapping("/users")
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
	
	@DeleteMapping("/users/{userId}")
	public void deleteUserById(@PathVariable("userId") long userId) {
		userRepository.deleteById(userId);
	}
	
	@RequestMapping(value = "/users/{userId}", method = RequestMethod.PUT)
	public void updateUserById(@PathVariable("userId") long userId, @RequestBody UserEntity user) {
		user.setId(userId);
		userRepository.saveAndFlush(user);
	}
	
	@RequestMapping(value = "/users/summary", method = RequestMethod.GET)
	public List<UserEntity> getUserSummary(@RequestParam("name") String name,@RequestParam("userType") String type) {
		String firstName = "";
		String lastName = "";
		if(name.trim().contains(" ")) {
			firstName = name.trim().substring(0, name.trim().indexOf(" "));
			lastName = name.trim().substring(name.trim().indexOf(" ")+1);
		}else {
			firstName = name.trim();
			lastName = name.trim();
		}
		if(type.trim().isEmpty() && name.trim().isEmpty()) {
			return userRepository.findAll();
		}else if(type.trim().isEmpty() && !name.trim().isEmpty()) {
			if(firstName.equals(lastName)) {
				return userRepository.findByFirstNameOrLastName( firstName, lastName);
			}else {
				return userRepository.findByFirstNameAndLastName( firstName, lastName);
			}
		}else if(!type.trim().isEmpty() && name.trim().isEmpty()) {
			return userRepository.findByUserType(UserType.valueOf(type));
		}else{
			if(firstName.equals(lastName)) {
				return userRepository.findByUserTypeAndFirstNameOrUserTypeAndLastName(UserType.valueOf(type), firstName,UserType.valueOf(type), lastName);
			}else {
				return userRepository.findByUserTypeAndFirstNameAndLastName(UserType.valueOf(type), firstName, lastName);
			}
		}
	}

}