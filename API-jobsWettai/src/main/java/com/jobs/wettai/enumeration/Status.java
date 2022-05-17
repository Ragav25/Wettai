package com.jobs.wettai.enumeration;

public enum Status {
  INTERVIEWING("INTERVIEWING"),
  SELECTED("SELECTED"),
  NOT_SELECTED("NOT_SELECTED"),
  APPLIED("APPLIED");

  private final String status;

  Status(String status){
    this.status = status;
  }

  public String getStatus(){
    return this.status;
  }
}
