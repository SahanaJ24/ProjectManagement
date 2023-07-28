package com.neo.security.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.neo.security.dto.ProjectDto;
import com.neo.security.entity.Project;
import com.neo.security.service.ProjectService;

@RestController
//@RequestMapping("/project")
public class ProjectController
{
	@Autowired
	private ProjectService proservice;
	
	@PostMapping("/project")
	public String addProject(@RequestBody Project project) {
		proservice.addProjectDetails(project);
		return "Added";
    }
	@GetMapping("/project")
	public List<Project> getAll(){
		return proservice.getAllProject();
	}
	
	@GetMapping("/project/get/{pId}")
	public Project getById(@PathVariable int pId){
		return proservice.getProjectById(pId);
	}
	
	@PutMapping("/project/update/{pId}")
	public Project updateById(@PathVariable int pId,@RequestBody Project project) {
		return proservice.updateProjectById(pId,project);
	}
	
	@DeleteMapping("/project/delete/{pId}")
	public String deleteProject(@PathVariable int pId) {
		proservice.deleteByProjectId(pId);
		return "Project deleted";
	}

}

