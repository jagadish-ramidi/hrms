package com.hr.backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hr.backend.entity.UserEntity;
import com.hr.backend.entity.UserType;
import com.hr.backend.model.UserSummaryResponse;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long>{

	@Query(value = "SELECT date_of_birth, first_name, id, last_name FROM users where user_type = :userType and (first_name = :name or last_name = :name)", nativeQuery = true)
	List<UserSummaryResponse> getUserSummaryByUserTypeAndName(UserType userType, String name);
	
	@Query(value = "SELECT date_of_birth, first_name, id, last_name FROM users where first_name = :name or last_name = :name", nativeQuery = true)
	List<UserSummaryResponse> getUserSummaryByName(String name);
	
	@Query(value = "SELECT date_of_birth, first_name, id, last_name FROM users where user_type = :userType", nativeQuery = true)
	List<UserSummaryResponse> getUserSummaryByUserType(UserType userType);
	
	List<UserEntity> findByUserType(UserType userType);
	
}
