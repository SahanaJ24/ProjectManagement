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
public class Expenditure {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int expId;
	private int projectId;
	private String projectName;
	private int forecastCost;
	private int actualCost;
	
	@OneToOne(fetch=FetchType.LAZY, cascade=CascadeType.ALL)
	private Project project;
}
