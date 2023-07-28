package com.neo.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neo.security.entity.Employee;
import com.neo.security.repository.EmpRepo;

@Service
public class EmpService {
	@Autowired 
	EmpRepo empRepo;
	
	public String addEmpDetails(Employee emp) {
		empRepo.save(emp);
		return "Employee Details added";
}
	public List<Employee> getAllEmp() {
      return empRepo.findAll();
  }
  
  public Employee getEmpById(int empId) {
      return empRepo.findById(empId).get();
  }
  
  
  public Employee updateEmpById(int empId, Employee emp) {
	  Employee emp1 = empRepo.findById(empId).get();
	  emp1.setEmpName(emp.getEmpName());
	  emp1.setEmpMail(emp.getEmpMail());
	  emp1.setEmpSalary(emp.getEmpSalary());
	  emp1.setRDob(emp.getRDob());
	  emp1.setEqType(emp.getEqType());
	  
    return empRepo.save(emp1);
  }
  public String deleteByEmpId(int empId) {
	  empRepo.deleteById(empId);
	  return "Employee Deleted";
  }
}
