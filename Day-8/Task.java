package com.example.pms.models;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Task {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int taskId;
	private String taskName;
	private String taskStartDate;
	private String taskEndDate;
	private String assignee;
	private String status;
	
	@OneToOne(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	private Employee employee;
}
