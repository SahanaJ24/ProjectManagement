package com.example.pms.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.pms.models.Project;

@Repository
public interface ProjectRepo extends JpaRepository<Project,Integer> {
	
}
