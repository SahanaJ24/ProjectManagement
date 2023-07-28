package com.neo.security.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.neo.security.dto.EmployeeDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Task 
{
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int taId;
	private String taName;
	private int empId;
	private String empName;
	private int pId;
	private String taStatus;
	
	@OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Employee employee;
	
	}
