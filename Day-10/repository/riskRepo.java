package com.neo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.neo.security.entity.Risk;
@Repository
public interface riskRepo extends JpaRepository<Risk,Integer>{

}
