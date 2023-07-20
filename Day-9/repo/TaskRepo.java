package com.example.pms.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.pms.models.Task;

@Repository
public interface TaskRepo extends JpaRepository<Task,Integer>{
	

}
