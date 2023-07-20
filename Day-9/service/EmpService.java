package com.example.pms.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.pms.dto.EmployeeDto;
import com.example.pms.models.Employee;
import com.example.pms.repo.EmpRepo;

@Service
public class EmpService {
    @Autowired
    private EmpRepo emprepo;

    private EmployeeDto convertEntityToDto(Employee emp) {
        EmployeeDto edto = new EmployeeDto();
        edto.setEmp_id(emp.getEmpId());
        edto.setEmp_name(emp.getEmpName());
        edto.setEmp_mail(emp.getEmpMail());
        return edto;
    }

    public String addEmployee(Employee emp)
    {
        emprepo.save(emp);
        return "Successfully Added";
    }

    public List<EmployeeDto> getAllEmployee()
    {
    	return emprepo.findAll()
				.stream()
				.map(this::convertEntityToDto)
				.collect(Collectors.toList());
    }

    public Employee updateEmployeeById(Employee emp) {
        emprepo.save(emp);
        return emp;
    }
    
    public String deleteEmployee(int id) {
    	emprepo.deleteById(id);
    	return "Deleted Successfully";
    }
}
