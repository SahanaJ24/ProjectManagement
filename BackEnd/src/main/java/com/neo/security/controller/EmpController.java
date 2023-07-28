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

import com.neo.security.entity.Employee;
import com.neo.security.entity.Risk;
import com.neo.security.service.EmpService;

@RestController
public class EmpController {
	@Autowired
	EmpService empSer;
	
	@PostMapping("/emp")
	public String addEmp(@RequestBody Employee emp){
		empSer.addEmpDetails(emp);
		return "Employee Added";
	}
	@GetMapping("/emp")
	public List<Employee> getAll(){
		return empSer.getAllEmp();
	}
	@GetMapping("/emp/get/{empId}")
	public Employee getById(@PathVariable int empId) {
		return empSer.getEmpById(empId);
	}
	@PutMapping("/emp/update/{empId}")
	public Employee updateById(@PathVariable int empId,@RequestBody Employee emp) {
		return empSer.updateEmpById(empId, emp);
	}
	@DeleteMapping("/emp/delete/{empId}")
	public String deleteEmp(@PathVariable int empId) {
		empSer.deleteByEmpId(empId);
		return "Employee Deleted";
	}
}
