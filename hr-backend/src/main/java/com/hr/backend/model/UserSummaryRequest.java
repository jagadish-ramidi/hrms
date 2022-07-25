package com.hr.backend.model;

import com.hr.backend.entity.UserType;

public class UserSummaryRequest {
	
	private String name;
	private UserType userType;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public UserType getUserType() {
		return userType;
	}
	public void setUserType(UserType userType) {
		this.userType = userType;
	}
	
}
