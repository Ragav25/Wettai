package com.jobs.wettai.repositroy;

import com.jobs.wettai.dao.JobsDAO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobsRepository extends JpaRepository<JobsDAO, Long> {

//  @Query("SELECT j FROM Jobs j WHERE j.user_id = ?1")
  List<JobsDAO> findAllJobsByUserID(Long userID);
//  List<JobsDAO> findByJobTitleOrCompany(String jobTitle, String company);


}
