package com.example.pms.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.pms.models.Expenditure;

@Repository
public interface ExpRepo extends JpaRepository<Expenditure,Integer>{

}
