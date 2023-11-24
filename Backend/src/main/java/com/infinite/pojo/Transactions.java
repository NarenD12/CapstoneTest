package com.infinite.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
//Pojo class for transactions table
@Entity
@Table(name="transactions")
public class Transactions {
	
	@Column(name="accountid")
	private long accountid;
	
	@Column(name="typeofTrans")
	private String typeofTrans;
	
	@Column(name="amount")
	private int amount;
	
	@Column(name="username")
	private String username;
	
	@Id
	@Column(name="billid")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long billid;
	
	@Column(name="balance")
	private double balance;
	
	
	
	public long getAccountid() {
		return accountid;
	}

	public void setAccountid(long accountid) {
		this.accountid = accountid;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
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

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Long getBillid() {
		return billid;
	}

	public void setBillid(Long billid) {
		this.billid = billid;
	}

	public Transactions(long accountid, String typeofTrans, int amount, String username, Long billid, double balance) {
		super();
		this.accountid=accountid;
		this.typeofTrans = typeofTrans;
		this.amount = amount;
		this.username = username;
		this.billid = billid;
		this.balance=balance;
	}

	public Transactions() {
		super();
	}
}
