package com.hr.backend.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="user_address")
public class UserAddressEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long addressId;
	private long userId;
	@Column(length = 75)
	private String addrLn1;
	@Column(length = 75)
	private String addrLn2;
	@Column(length = 25)
	private String addrName;
	@Column(length = 10)
	private Address addrType;
	@Column(length = 25)
	private String city;
	@Column(length = 10)
	private String stateCode;
	@Column(length = 10)
	private String postalCode;
	@Column(length = 25)
	private String country;
	public long getAddressId() {
		return addressId;
	}
	public void setAddressId(long addressId) {
		this.addressId = addressId;
	}
	public long getUserId() {
		return userId;
	}
	public void setUserId(long userId) {
		this.userId = userId;
	}
	public String getAddrLn1() {
		return addrLn1;
	}
	public void setAddrLn1(String addrLn1) {
		this.addrLn1 = addrLn1;
	}
	public String getAddrLn2() {
		return addrLn2;
	}
	public void setAddrLn2(String addrLn2) {
		this.addrLn2 = addrLn2;
	}
	public String getAddrName() {
		return addrName;
	}
	public void setAddrName(String addrName) {
		this.addrName = addrName;
	}
	public Address getAddrType() {
		return addrType;
	}
	public void setAddrType(Address addrType) {
		this.addrType = addrType;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getStateCode() {
		return stateCode;
	}
	public void setStateCode(String stateCode) {
		this.stateCode = stateCode;
	}
	public String getPostalCode() {
		return postalCode;
	}
	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	
	
	
}
