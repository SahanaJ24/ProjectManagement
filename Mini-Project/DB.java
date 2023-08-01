package com.shr.model;

import java.sql.*;

public class DB 
{
	static Connection con;
	public static Connection createc() 
	{	
		try 
		{
			//load the driver
			Class.forName("com.mysql.cj.jdbc.Driver");
			
			//create the Connection
			String user = "root"; 
			String password = "root"; 
			String url = "jdbc:mysql://localhost:3306/studentrecord";
			con = DriverManager.getConnection(url,user,password);
		}
		catch(Exception e) 
		{
			e.printStackTrace();
		}
		return con;
	}
}
