package com.jobs.wettai.enumeration;

public enum Status {
  INTERVIEWING("INTERVIEWING"),
  SELECTED("SELECTED"),
  NOT_SELECTED("NOT_SELECTED"),
  APPLIED("APPLIED"),
  HIT_LIST("HITLIST");

  private final String status;

  Status(String status){
    this.status = status;
  }

  public String getStatus(){
    return this.status;
  }
}
