package com.hr.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.hr.backend.entity.UserAddressEntity;
import com.hr.backend.model.UserSummaryResponse;

public interface UserAddressRepository extends JpaRepository<UserAddressEntity, Long> {

}
