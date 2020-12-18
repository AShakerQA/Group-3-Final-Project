package com.qa.helpqueue;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;


@EnableJpaRepositories
@SpringBootApplication
public class SpringHelpQueueApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringHelpQueueApplication.class, args);
	}
	
}
