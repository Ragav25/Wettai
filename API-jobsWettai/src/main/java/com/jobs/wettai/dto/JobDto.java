package com.jobs.wettai.dto;

import com.jobs.wettai.dao.KeywordsDAO;
import com.jobs.wettai.enumeration.Status;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

public class JobDto {

  private String jobTitle;
  private Date appliedDate;
  private String company;
  private Status status;
  private String jobAccessLink;
  private String jobDescription;
  private String feedback;
  private boolean favourite;
  private Set<KeywordsDAO> jobsKeyword = new HashSet<>();
  private Long userID;

  public JobDto(String jobTitle, Date appliedDate, String company, Status status, String jobAccessLink,
                String jobDescription, String feedback, boolean favourite, Set<KeywordsDAO> jobsKeyword, Long userID) {
    this.jobTitle = jobTitle;
    this.appliedDate = appliedDate;
    this.company = company;
    this.status = status;
    this.jobAccessLink = jobAccessLink;
    this.jobDescription = jobDescription;
    this.feedback = feedback;
    this.favourite = favourite;
    this.jobsKeyword = jobsKeyword;
    this.userID = userID;
  }

  public JobDto(String jobTitle, Date appliedDate, String company, Status status, Long userID) {
    this.jobTitle = jobTitle;
    this.appliedDate = appliedDate;
    this.company = company;
    this.status = status;
    this.userID = userID;
  }

  public JobDto() {
  }

  public String getJobTitle() {
    return jobTitle;
  }

  public void setJobTitle(String jobTitle) {
    this.jobTitle = jobTitle;
  }

  public Date getAppliedDate() {
    return appliedDate;
  }

  public void setAppliedDate(Date appliedDate) {
    this.appliedDate = appliedDate;
  }

  public String getCompany() {
    return company;
  }

  public void setCompany(String company) {
    this.company = company;
  }

  public Status getStatus() {
    return status;
  }

  public void setStatus(Status status) {
    this.status = status;
  }

  public String getJobAccessLink() {
    return jobAccessLink;
  }

  public void setJobAccessLink(String jobAccessLink) {
    this.jobAccessLink = jobAccessLink;
  }

  public String getJobDescription() {
    return jobDescription;
  }

  public void setJobDescription(String jobDescription) {
    this.jobDescription = jobDescription;
  }

  public String getFeedback() {
    return feedback;
  }

  public void setFeedback(String feedback) {
    this.feedback = feedback;
  }

  public boolean isFavourite() {
    return favourite;
  }

  public void setFavourite(boolean favourite) {
    this.favourite = favourite;
  }

  public Set<KeywordsDAO> getJobsKeyword() {
    return jobsKeyword;
  }

  public void setJobsKeyword(Set<KeywordsDAO> jobsKeyword) {
    this.jobsKeyword = jobsKeyword;
  }

  public Long getUserID() {
    return userID;
  }

  public void setUserID(Long userID) {
    this.userID = userID;
  }
}
