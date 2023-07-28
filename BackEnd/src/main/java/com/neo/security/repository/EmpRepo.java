package com.neo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.neo.security.entity.Employee;

@Repository
public interface EmpRepo extends JpaRepository<Employee,Integer> {

}
