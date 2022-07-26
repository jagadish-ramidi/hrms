package com.hr.backend.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.hr.backend.entity.UserAddressEntity;
import com.hr.backend.entity.UserType;

public interface UserAddressRepository extends JpaRepository<UserAddressEntity, Long> {
	
	List<UserAddressEntity> findByUserId(long userId);

}
