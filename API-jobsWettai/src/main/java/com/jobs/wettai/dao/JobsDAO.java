package com.jobs.wettai.dao;
import com.jobs.wettai.enumeration.Status;

import javax.persistence.*;
import java.util.*;

import static javax.persistence.GenerationType.SEQUENCE;

@Entity
@Table(name = "jobs")
public class JobsDAO {

  @Id
  @SequenceGenerator(
      name="jobs_sequence",
      sequenceName = "jobs_sequence",
      allocationSize = 1
  )
  @GeneratedValue(
      strategy = SEQUENCE,
      generator = "jobs_sequence"
  )
  @Column(
      name = "id",
      updatable = false
  )
  private Long id;

  @Column(
      name = "job_title",
      nullable = false,
      columnDefinition = "TEXT"
  )
  private String jobTitle;

  @Column(
      name = "applied_date",
      nullable = false
  )
  private Date appliedDate;

  @Column(
      name = "company",
      nullable = false,
      columnDefinition = "TEXT"
  )
  private String company;

  @Column(
      nullable = false
  )
  private Status status;

  @Column(
      name = "job_access_link",
      columnDefinition = "TEXT"
  )
  private String jobAccessLink;

  @Column(
      name = "job_description",
      columnDefinition = "TEXT"
  )
  private String jobDescription;

  @Column(
      name = "feedback",
      columnDefinition = "TEXT"
  )
  private String feedback;

  @Column(
      name="favourite",
      columnDefinition = "boolean default false"
  )
  private boolean favourite;

  @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
  @JoinTable(
      name="job_keywords",
      joinColumns = @JoinColumn(name = "job_id"),
      inverseJoinColumns = @JoinColumn(name="keyword_id")
  )
  private Set<KeywordsDAO> jobsKeyword = new HashSet<>();

  @Column(
      name = "user_id",
      nullable = false
  )
  private Long userID;

  public JobsDAO(String jobTitle,
                 Date appliedDate,
                 String company,
                 Status status,
                 String jobAccessLink,
                 String jobDescription,
                 String feedback,
                 Boolean favourite,
                 Long userID) {
    this.jobTitle = jobTitle;
    this.appliedDate = appliedDate;
    this.company = company;
    this.status = status;
    this.jobAccessLink = jobAccessLink;
    this.jobDescription = jobDescription;
    this.feedback = feedback;
    this.favourite = favourite;
    this.userID = userID;
  }

  public JobsDAO(String jobTitle, Date appliedDate, String company, Status status, Long userID) {
    this.jobTitle = jobTitle;
    this.appliedDate = appliedDate;
    this.company = company;
    this.status = status;
    this.userID = userID;
  }

  public JobsDAO() {
  }



  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
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

//  public void setJobsKeyword(Set<KeywordsDAO> jobsKeyword) {
//    this.jobsKeyword = jobsKeyword;
//  }

  //  public void addKeyword(KeywordsDAO keywordsDAO){
//    jobsKeyword.add(keywordsDAO);
//  }

  public Long getUserID() {
    return userID;
  }

  public void setUserID(Long userID) {
    this.userID = userID;
  }

  @Override
  public String toString() {
    return "JobsDAO{" +
        "id=" + id +
        ", jobTitle='" + jobTitle + '\'' +
        ", appliedDate=" + appliedDate +
        ", company='" + company + '\'' +
        ", jobAccessLink='" + jobAccessLink + '\'' +
        ", jobDescription='" + jobDescription + '\'' +
        ", feedback='" + feedback + '\'' +
        ", favourite='" + favourite + '\'' +
        ", userID=" + userID +
        '}';
  }
}
