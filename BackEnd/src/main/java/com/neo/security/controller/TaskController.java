package com.neo.security.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.neo.security.dto.TaskDto;
import com.neo.security.entity.Employee;
import com.neo.security.entity.Task;
import com.neo.security.service.TaskService;

@RestController
public class TaskController 
{
    @Autowired
    private TaskService taskSer;

    @PostMapping("/task")
	public String addTask(@RequestBody Task task){
    	taskSer.addTaskDetails(task);
		return "Task Added";
	}
	@GetMapping("/task")
	public List<Task> getAll(){
		return taskSer.getAllTask();
	}
	@GetMapping("/task/get/{taId}")
	public Task getById(@PathVariable int taId) {
		return taskSer.getTaskById(taId);
	}
	@PutMapping("/task/update/{taId}")
	public Task updateById(@PathVariable int taId,@RequestBody Task task) {
		return taskSer.updateTaskById(taId, task);
	}
	@DeleteMapping("/task/delete/{taId}")
	public String deleteTask(@PathVariable int taId) {
		taskSer.deleteByTaskId(taId);
		return "Task Deleted";
	}
}
