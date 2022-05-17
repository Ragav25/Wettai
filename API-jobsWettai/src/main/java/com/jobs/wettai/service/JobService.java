package com.jobs.wettai.service;

import com.jobs.wettai.dao.JobsDAO;

import java.util.List;
import java.util.Optional;

public interface JobService {

  List<JobsDAO> getJobs();

  List<JobsDAO> getJobsByUser(Long userID);

  Optional<JobsDAO> getJobByID(Long jobID);

  void addJob(JobsDAO jobsDAO);

  void deleteJob(Long jobID);

  void updateJob(JobsDAO jobsDAO);

}
