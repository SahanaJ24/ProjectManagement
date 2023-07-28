package com.neo.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.neo.security.entity.Risk;
import com.neo.security.service.riskService;

@RestController
public class RiskController {
	@Autowired 
	private riskService riskser;
	
	@PostMapping("/risk")
	public String addRisk(@RequestBody Risk risk){
		riskser.addRiskDetails(risk);
		return "Added";
	}
	@GetMapping("/risk")
	public List<Risk> getAll(){
		return riskser.getAllRisk();
	}
	@GetMapping("/risk/get/{riId}")
	public Risk getById(@PathVariable int riId) {
		return riskser.getRiskById(riId);
	}
	@PutMapping("/risk/update/{riId}")
	public Risk updateById(@PathVariable int riId,@RequestBody Risk risk) {
		return riskser.updateRiskById(riId, risk);
	}
	@DeleteMapping("/risk/delete/{riId}")
	public String deleteRisk(@PathVariable int riId) {
		riskser.deleteByRiskId(riId);
		return "Risk Deleted";
	}
	
	
}
