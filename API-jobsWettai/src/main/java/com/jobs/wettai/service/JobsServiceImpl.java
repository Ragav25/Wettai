package com.jobs.wettai.service;

import com.jobs.wettai.dao.JobsDAO;
import com.jobs.wettai.dao.KeywordsDAO;
import com.jobs.wettai.dto.JobDto;
import com.jobs.wettai.enumeration.Status;
import com.jobs.wettai.repositroy.JobsRepository;
import com.jobs.wettai.repositroy.KeywordsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class JobsServiceImpl implements JobService{

  private final JobsRepository jobsRepository;
  private final KeywordsRepository keywordsRepository;

  @Autowired
  public JobsServiceImpl(JobsRepository jobsRepository, KeywordsRepository keywordsRepository) {
    this.jobsRepository = jobsRepository;
    this.keywordsRepository = keywordsRepository;
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
  public void addJob(JobDto jobDto) {
    Set<KeywordsDAO> keywordsDAOS = new HashSet<>();
    keywordsDAOS.addAll(jobDto.getJobsKeyword());
    JobsDAO jobsDAO = new JobsDAO();
    jobsDAO.getJobsKeyword().addAll(keywordsDAOS);
    jobsDAO.setStatus(jobDto.getStatus());
    jobsDAO.setCompany(jobDto.getCompany());
    jobsDAO.setJobTitle(jobDto.getJobTitle());
    jobsDAO.setAppliedDate(jobDto.getAppliedDate());
    jobsDAO.setUserID(jobDto.getUserID());

    for(KeywordsDAO s: jobDto.getJobsKeyword()){
      List<KeywordsDAO> keywordPresentList = keywordsRepository.findByKeyword(s.getKeyword());
      if(keywordPresentList.isEmpty()){
        System.out.println(s.getKeyword() + "**** Keyword not present" + keywordPresentList);
//        keywordsRepository.save(s);
        s.getRelatedJobs().add(jobsDAO);
      } else {
        keywordPresentList.stream().forEach(key -> {
          System.out.println(key.getId());
        });
      }
    }

    for (KeywordsDAO var : keywordsDAOS){
      var.getRelatedJobs().add(jobsDAO);
    }

    this.jobsRepository.save(jobsDAO);

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
