package com.interns.ems;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.interns"})
@ConfigurationPropertiesScan("com.interns")
public class EMSApplication {

	public static void main(String[] args) {
		SpringApplication.run(EMSApplication.class, args);
	}

}
