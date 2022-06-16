package com.jobs.wettai.dao;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

import java.util.HashSet;
import java.util.Set;

import static javax.persistence.GenerationType.SEQUENCE;

@Entity
@Table(name = "keywords")
public class KeywordsDAO {

  @Id
  @SequenceGenerator(
      name="keywords_sequence",
      sequenceName = "keywords_sequence",
      allocationSize = 1
  )
  @GeneratedValue(
      strategy = SEQUENCE,
      generator = "keywords_sequence"
  )
  @Column(
      name = "id",
      updatable = false
  )
  private Long id;

  @Column(
    name = "keyword",
    columnDefinition = "TEXT", unique = true
  )
  private String keyword;

  @JsonIgnore
  @ManyToMany(mappedBy = "jobsKeyword",fetch = FetchType.LAZY, cascade = CascadeType.ALL)
  private Set<JobsDAO> relatedJobs = new HashSet<>();

  public KeywordsDAO() {

  }

  public KeywordsDAO(String keyword) {
    this.keyword = keyword;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getKeyword() {
    return keyword;
  }

  public void setKeyword(String keyword) {
    this.keyword = keyword;
  }

  public Set<JobsDAO> getRelatedJobs() {
    return relatedJobs;
  }

//  public void setRelatedJobs(Set<JobsDAO> relatedJobs) {
//    this.relatedJobs = relatedJobs;
//  }

  //  public void addKeyword(JobsDAO jobsDAO){
//    relatedJobs.add(jobsDAO);
//  }


  @Override
  public String toString() {
    return "KeywordsDAO{" +
        "id=" + id +
        ", keyword='" + keyword + '\'' +
        '}';
  }
}
