package com.infinite.pojo;

import java.util.List;

import javax.persistence.CascadeType;
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
@Table(name="account")
public class Account {
	@Id
    @Column(name="account_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long account_id;
    
    @Column(name="fullname")
	private String fullname;
    
    @Column(name="cardNo")
	private long cardNo;
    
    @Column(name="expirydate")
	private String expirydate ;
    
    @Column(name="cvv")
	private int cvv;
    
    @Column(name="balance")
	private long balance;
    
    @ManyToOne(targetEntity=User.class)
    @JoinColumn(name = "user_id")
	private int user_id;

	public long getAccount_id() {
		return account_id;
	}

	public void setAccount_id(long account_id) {
		this.account_id = account_id;
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

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	
//    @OneToMany(mappedBy = "account", cascade = CascadeType.ALL)
//    private List<Transactions> transactions;
//	
    
    
}
