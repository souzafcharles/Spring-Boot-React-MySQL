package com.souza.charles.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.souza.charles.backend.environments.LoadEnvironment;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		LoadEnvironment.loadEnv();
		SpringApplication.run(BackendApplication.class, args);
	}

}