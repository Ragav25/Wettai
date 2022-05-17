package com.jobs.wettai;

import com.jobs.wettai.dao.JobsDAO;
import com.jobs.wettai.repositroy.JobsRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

@SpringBootApplication
public class WettaiApplication {

	public static void main(String[] args) {

		SpringApplication.run(WettaiApplication.class, args);
	};
//
//	@Bean
//	CommandLineRunner commandLineRunner(JobsRepository jobsRepository){
//		return args -> {
//			JobsDAO job1 = new JobsDAO(
//					"Data Analytics",
//					new SimpleDateFormat("yyyy-MM-dd").parse("2022-05-02"),
//					"Meta",
//					1L
//			);
//			jobsRepository.save(job1);
//		};
//	};

}
