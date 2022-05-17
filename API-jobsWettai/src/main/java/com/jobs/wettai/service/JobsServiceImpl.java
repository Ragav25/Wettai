package com.jobs.wettai.service;

import com.jobs.wettai.dao.JobsDAO;
import com.jobs.wettai.enumeration.Status;
import com.jobs.wettai.repositroy.JobsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobsServiceImpl implements JobService{

  private final JobsRepository jobsRepository;

  @Autowired
  public JobsServiceImpl(JobsRepository jobsRepository) {
    this.jobsRepository = jobsRepository;
  }

//  GET METHODS
  @Override
  public List<JobsDAO> getJobs(){
    return jobsRepository.findAll();
  }

  @Override
  public List<JobsDAO> getJobsByUser(Long userID) {
    return jobsRepository.findAllJobsByUserID(userID);
  }

  @Override
  public Optional<JobsDAO> getJobByID(Long jobID) {
    boolean exists = jobsRepository.existsById(jobID);
    if(!exists){
      throw new IllegalStateException(
          "No job available with id " + jobID
      );
    }
    return jobsRepository.findById(jobID);
  }

//  POST METHODS
  @Override
  public void addJob(JobsDAO jobsDAO) {
    jobsRepository.save(jobsDAO);
  }

//  DELETE METHODS
  @Override
  public void deleteJob(Long jobID) {
    boolean exists = jobsRepository.existsById(jobID);
    if(!exists){
      throw new IllegalStateException(
          "job with id " + jobID
      );
    }
    jobsRepository.deleteById(jobID);
  }

//  UPDATE METHODS
  @Override
  public void updateJob(JobsDAO jobsDAO ) {
    Optional<JobsDAO> result = jobsRepository.findById(jobsDAO.getId());

    if(result.isPresent()){
      jobsDAO.setId(result.get().getId());
      jobsRepository.save(jobsDAO);
    } else {
      throw new IllegalStateException(
          "job id " + jobsDAO.getId() +" not available "
      );
    }
  }

}
