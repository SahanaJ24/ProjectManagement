package com.example.pms.models;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Risk {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int riskId;
	private String riskDesc;
	private String mitigationStrategies;
	private String riskStatus;
	private boolean activeFlag;

	@ManyToOne(fetch=FetchType.LAZY, cascade=CascadeType.ALL)
	private Project project;
}
