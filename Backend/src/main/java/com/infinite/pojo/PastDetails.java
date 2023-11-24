package com.infinite.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
//Pojo class for pastdetails
@Entity
@Table(name="PastDetails")
public class PastDetails {

	@Column(name="accountid")
	private long accountid;
	
	@Column(name="typeofTrans")
	private String typeofTrans;
	
	@Column(name="amount")
	private int amount;
	
	@Id
	@Column(name="billid")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long billid;

	public long getAccountid() {
		return accountid;
	}

	public void setAccountid(long accountid) {
		this.accountid = accountid;
	}

	public String getTypeofTrans() {
		return typeofTrans;
	}

	public void setTypeofTrans(String typeofTrans) {
		this.typeofTrans = typeofTrans;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public Long getBillid() {
		return billid;
	}

	public void setBillid(Long billid) {
		this.billid = billid;
	}

	public PastDetails(long accountid, String typeofTrans, int amount, Long billid) {
		super();
		this.accountid = accountid;
		this.typeofTrans = typeofTrans;
		this.amount = amount;
		this.billid = billid;
	}
	
	public PastDetails() {
		
	}
}
