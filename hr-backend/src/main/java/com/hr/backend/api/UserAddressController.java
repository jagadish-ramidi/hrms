package com.hr.backend.api;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.hr.backend.entity.UserAddressEntity;
import com.hr.backend.repository.UserAddressRepository;

@RestController
@CrossOrigin(origins="*")
public class UserAddressController {
	
	@Autowired
	private UserAddressRepository userAddressRepository;
	
	@GetMapping("/users/{userId}/address")
	public List<UserAddressEntity> getUserByID(@PathVariable("userId") long userId) {
		return userAddressRepository.findByUserId(userId);
	}
	
	@PutMapping("/users/{userId}/address")
	public List<UserAddressEntity> addAddressbyUserID(@PathVariable("userId") long userId, @RequestBody List<UserAddressEntity> address) {
		for(UserAddressEntity addr: address) {
			addr.setUserId(userId);
		}
		return userAddressRepository.saveAllAndFlush(address);
	}
	
}
