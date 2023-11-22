package com.infinite.pojo;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "account")
public class Account {

	@ManyToOne
	@JoinColumn(name = "userid", nullable = false)
	private User user;

	@Id
	@Column(name = "accountid")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long accountid;

	@Column(name = "fullname")
	private String fullname;

	@Column(name = "cardNo")
	private long cardNo;

	@Column(name = "expirydate")
	private String expirydate;

	@Column(name = "cvv")
	private int cvv;

	@Column(name = "balance")
	private long balance;

//	@ManyToOne(cascade = CascadeType.ALL, targetEntity = User.class)
//	@JoinColumn(name = "userid", referencedColumnName = "userid")
//	private int userid;

	public long getAccountid() {
		return accountid;
	}

	public void setAccountid(long accountid) {
		this.accountid = accountid;
	}

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public long getCardNo() {
		return cardNo;
	}

	public void setCardNo(long cardNo) {
		this.cardNo = cardNo;
	}

	public String getExpirydate() {
		return expirydate;
	}

	public void setExpirydate(String expirydate) {
		this.expirydate = expirydate;
	}

	public int getCvv() {
		return cvv;
	}

	public void setCvv(int cvv) {
		this.cvv = cvv;
	}

	public long getBalance() {
		return balance;
	}

	public void setBalance(long balance) {
		this.balance = balance;
	}

//	public int getUserid() {
//		return userid;
//	}
//
//	public void setUserid(int userid) {
//		this.userid = userid;
//	}

	public Account() {
		super();
	}

	public Account(long accountid, String fullname, long cardNo, String expirydate, int cvv, long balance, int userid) {
		super();
		this.accountid = accountid;
		this.fullname = fullname;
		this.cardNo = cardNo;
		this.expirydate = expirydate;
		this.cvv = cvv;
		this.balance = balance;
		//this.userid = userid;
	}

    @OneToMany(mappedBy = "account")
    private List<Transactions> transactions;
	
}
