package com.example.pms.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.pms.models.Admin;

@Repository
public interface AdminRepo extends JpaRepository<Admin, Integer>{

}
