package com.neo.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neo.security.entity.Risk;
import com.neo.security.repository.riskRepo;

@Service
public class riskService {
	@Autowired
	riskRepo riskrepo;
	public String addRiskDetails(Risk risk) {
		riskrepo.save(risk);
	return "Risk Details added";
}
	public List<Risk> getAllRisk() {
      return riskrepo.findAll();
  }
  
  public Risk getRiskById(int riId) {
      return riskrepo.findById(riId).get();
  }
  
  
  public Risk updateRiskById(int riId, Risk risk) {
	  Risk ris = riskrepo.findById(riId).get();
	  ris.setPId(risk.getPId());
	  ris.setPName(risk.getPName());
	  ris.setRiDesc(risk.getRiDesc());
	  ris.setMitigationStrategy(risk.getMitigationStrategy());
	  ris.setRiStatus(risk.getRiStatus());
	  
    return riskrepo.save(risk);
  }
  public String deleteByRiskId(int riId) {
	  riskrepo.deleteById(riId);
	  return "Risk Deleted";
  }

	
}
