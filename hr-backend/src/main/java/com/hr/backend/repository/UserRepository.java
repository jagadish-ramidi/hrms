package com.hr.backend.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.hr.backend.entity.UserEntity;
import com.hr.backend.entity.UserType;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long>{
	
	List<UserEntity> findByUserTypeAndFirstNameOrUserTypeAndLastName(UserType userType, String firstName,UserType one, String lastName);
	
	List<UserEntity> findByUserTypeAndFirstNameAndLastName(UserType userType, String firstName, String lastName);
	
	List<UserEntity> findByUserType(UserType userType);
	
	List<UserEntity> findByFirstNameOrLastName(String firstName, String lastName);
	
	List<UserEntity> findByFirstNameAndLastName(String firstName, String lastName);
	
}
