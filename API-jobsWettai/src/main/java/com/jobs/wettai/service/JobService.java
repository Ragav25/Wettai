package com.jobs.wettai.service;

import com.jobs.wettai.dao.JobsDAO;
import com.jobs.wettai.dto.JobDto;

import java.util.List;
import java.util.Optional;

public interface JobService {

  List<JobsDAO> getJobs();

  List<JobsDAO> getJobsByUser(Long userID);

  Optional<JobsDAO> getJobByID(Long jobID);

  void addJob(JobDto jobDto);

  void deleteJob(Long jobID);

  void updateJob(JobsDAO jobsDAO);

}
