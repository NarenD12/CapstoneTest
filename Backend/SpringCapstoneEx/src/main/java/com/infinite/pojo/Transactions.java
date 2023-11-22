package com.infinite.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="transactions")
public class Transactions {

	@ManyToOne(targetEntity=Account.class,fetch = FetchType.LAZY)
	@JoinColumn(name = "account_id")
	private long account_id;
	
	@Column(name="typeofTrans")
	private String typeofTrans;
	
	@Column(name="amount")
	private int amount;
	
	@Column(name="username")
	private String username;
	
	@Id
	@Column(name="bill_num")
	private int bill_num;

	public long getAccount_id() {
		return account_id;
	}

	public void setAccount_id(long account_id) {
		this.account_id = account_id;
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

	public int getBill_num() {
		return bill_num;
	}

	public void setBill_num(int bill_num) {
		this.bill_num = bill_num;
	}

}
