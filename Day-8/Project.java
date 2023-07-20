package com.example.pms.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@Entity
public class Project {
	@Id	
	private int projectId;
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private String projectName;
	private String startDate;
	private String endDate;
	private String description;
	private int budget;
	
	@OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Expenditure expenditure;
	
	@OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Report report;
	
	@OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Admin ad;
	
	@OneToMany(fetch = FetchType.LAZY,cascade=CascadeType.ALL , mappedBy="project")
	private List<Risk>risk;
}
