package com.jobs.wettai.contoller;

import com.jobs.wettai.dao.JobsDAO;
import com.jobs.wettai.service.JobsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "user/jobs")
public class JobsController {

  private final JobsServiceImpl jobsServiceImpl;

  @Autowired
  public JobsController(JobsServiceImpl jobsServiceImpl) {
    this.jobsServiceImpl = jobsServiceImpl;
  }

  @GetMapping(path = "/getalljobs")
  public List<JobsDAO> getJobs(){
    return jobsServiceImpl.getJobs();
  }

  @GetMapping(path = "/getjobbyuserid/user_id")
  public List<JobsDAO> getJobsByUser(Long userID) {
    return jobsServiceImpl.getJobsByUser(userID);
  }

  @GetMapping(path = "/job/{jobID}")
  public Optional<JobsDAO> getJobByID(@PathVariable("jobID") Long jobID){
    return jobsServiceImpl.getJobByID(jobID);
  }

  @PostMapping(path = "/postajob")
  public void addNewJob(@RequestBody JobsDAO jobsDAO){
    jobsServiceImpl.addJob(jobsDAO);
  }

  @DeleteMapping(path = "/delete/{jobID}")
  public void deleteJob(@PathVariable("jobID") Long jobID) {
    jobsServiceImpl.deleteJob(jobID);
  }

  @PutMapping(path = "/updatejob")
  public void updateJob(@RequestBody JobsDAO jobsDAO){
    jobsServiceImpl.updateJob(jobsDAO);
  }

}
