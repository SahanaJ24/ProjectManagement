package com.neo.security.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class TaskDto 
{
	private int taId;
	private String taName;
    private String taStatus;
    private String taStartdate;
    private String taEnddate;
    private EmployeeDto employeeDto;
}
