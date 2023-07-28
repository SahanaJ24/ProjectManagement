package com.neo.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import com.neo.security.dto.EmployeeDto;
import com.neo.security.dto.TaskDto;
import com.neo.security.entity.Employee;
import com.neo.security.entity.Risk;
import com.neo.security.entity.Task;
import com.neo.security.repository.TaskRepo;

@Service
public class TaskService 
{
    @Autowired
    private TaskRepo taskRepo;

    public String addTaskDetails(Task task) {
    	taskRepo.save(task);
	return "Task Details added";
}
	public List<Task> getAllTask() {
      return taskRepo.findAll();
  }
  
  public Task getTaskById(int taId) {
      return taskRepo.findById(taId).get();
  }
  
  
  public Task updateTaskById(int taId, Task task) {
	  Task ts = taskRepo.findById(taId).get();
	  ts.setTaName(task.getTaName());
	  ts.setPId(task.getPId());
	  ts.setEmpId(task.getEmpId());
	  ts.setEmpName(task.getEmpName());
	  ts.setTaStatus(task.getTaStatus());
	  
    return taskRepo.save(task);
  }
  public String deleteByTaskId(int taId) {
	  taskRepo.deleteById(taId);
	  return "Task Deleted";
  }
}
