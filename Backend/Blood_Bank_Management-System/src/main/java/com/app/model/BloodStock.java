package com.app.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="bloodstock")
public class BloodStock {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="bloodgrp",columnDefinition = "text", nullable = false, updatable = false)
	private String bloodgrp;
	
	@Column(name="quantity")
	private int quantity;
	
	public BloodStock() {
		// TODO Auto-generated constructor stub
	}
	
	public BloodStock(String bloodgrp, int quantity) {
		this.bloodgrp=bloodgrp;
		this.quantity=quantity;
	}

	public String getBloodgrp() {
		return bloodgrp;
	}

	public void setBloodgrp(String bloodgrp) {
		this.bloodgrp = bloodgrp;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	

}
