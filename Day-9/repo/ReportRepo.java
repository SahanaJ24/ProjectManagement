package com.example.pms.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.pms.models.Report;

@Repository
public interface ReportRepo extends JpaRepository<Report,Integer>{

}
