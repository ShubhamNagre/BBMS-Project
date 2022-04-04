package com.app.model;


import javax.persistence.CascadeType;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
@Entity
@Table(name="user")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private long id;
	@Column(name="fname")
	private String fname;
	@Column(name="mname")
	private String mname;
	@Column(name="lname")
	private String lname;
	@Column(name="gender")
	private String gender;
	@Column(name="bloodgroup")
	private String blood_group;
	@Column(name="address")
	private String address;
	@Column(name="username")
	private String username;
	@Column(name="password")
	private String password;
	@Column(name="mobileno")
	private long mobile;
	@Column(name="email")
	private String email;
	@Column(name="department")
	private String department;
	@Column(name="age")
	private int age;
	@Column(name="subscribe")
	private Boolean subscribe;
	@Enumerated(EnumType.STRING)
	@Column(name="role")
	private Role role;
	
//	@OneToOne(cascade =CascadeType.ALL)
//	@JoinColumn(name="btlid")
//	private BloodTestLog bloodTestLog;
	
//	@OneToOne(cascade =CascadeType.ALL)
//	@JoinColumn(name="brequest")
//	private Request request;
	
	public User() {
		// TODO Auto-generated constructor stub
	}
	public User(String fname,String mname,String lname, String gender, String blood_group, String address, String username, String password,
			int mobile, String email, String department, int age, Boolean subscribe,Role role) {
		super();
		this.fname = fname;
		this.mname = mname;
		this.lname = lname;
		this.gender = gender;
		this.blood_group = blood_group;
		this.address = address;
		this.username = username;
		this.password = password;
		this.mobile = mobile;
		this.email = email;
		this.department = department;
		this.age = age;
		this.subscribe = subscribe;
		this.role=role;
//		this.bloodTestLog=bloodTestLog;
//		this.request=request;
		
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getMname() {
		return mname;
	}
	public void setMname(String mname) {
		this.mname = mname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getBlood_group() {
		return blood_group;
	}
	public void setBlood_group(String blood_group) {
		this.blood_group = blood_group;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public long getMobile() {
		return mobile;
	}
	public void setMobile(long mobile) {
		this.mobile = mobile;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public Boolean getSubscribe() {
		return subscribe;
	}
	public void setSubscribe(Boolean subscribe) {
		this.subscribe = subscribe;
	}
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
//	public BloodTestLog getBloodTestLog() {
//		return bloodTestLog;
//	}
//	public void setBloodTestLog(BloodTestLog bloodTestLog) {
//		this.bloodTestLog = bloodTestLog;
//	}
//	public Request getRequest() {
//		return request;
//	}
//	public void setRequest(Request request) {
//		this.request = request;
//	}
//	
	
}
