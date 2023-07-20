package com.example.pms.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.pms.models.Risk;

@Repository
public interface RiskRepo extends JpaRepository<Risk,Integer>{

}
