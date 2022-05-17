package com.jobs.wettai.service;

import com.jobs.wettai.dao.JobsDAO;
import com.jobs.wettai.enumeration.Status;
import com.jobs.wettai.repositroy.JobsRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
public class JobsServiceImplTest {

  @Mock
  private JobsRepository jobsRepository;

  @InjectMocks
  private JobsServiceImpl jobsService;

  private static final Long user_id = 123L;

  @BeforeEach
  void setUp() {
    jobsService = new JobsServiceImpl(jobsRepository);
  }


  @Test
  void getJobs() {
//    List<JobsDAO> testGetJobs = new ArrayList<>();
//
//    JobsDAO jobsDAO1 = new JobsDAO("test", Date.from(Instant.now()) , "", Status.APPLIED, user_id);
//    JobsDAO jobsDAO2 = new JobsDAO("Software", Date.from(Instant.now()) , "", Status.INTERVIEWING, user_id);
//
//    testGetJobs.add(jobsDAO1);
//    testGetJobs.add(jobsDAO2);
//
//    Mockito.when(jobsRepository.findAll()).thenReturn(testGetJobs);
//
//    List<JobsDAO> result = jobsService.getJobs();
//
//    assertEquals(result, testGetJobs);

    //when
    jobsService.getJobs();
    //then
    verify(jobsRepository).findAll();

  }

  @Test
  @Disabled
  void getJobsByUser() {

    List<JobsDAO> test = new ArrayList<>();

    JobsDAO jobsDAO = new JobsDAO("test", Date.from(Instant.now()) , "", Status.APPLIED, user_id);

    test.add(jobsDAO);

    Mockito.when(jobsRepository.findAllJobsByUserID(user_id)).thenReturn(test);

    List<JobsDAO> result = jobsService.getJobsByUser(user_id);

    assertEquals(result.get(0).getUserID(), user_id);
  }

  @Test
  void canAddJob() {
    //given
    JobsDAO data1 = new JobsDAO(
        "Software Engineer", Date.from(Instant.now()), "Workday", Status.SELECTED, "link", "",
        "Completed all round and got 40k", 1L
    );
    //when
    jobsService.addJob(data1);
    //then
    ArgumentCaptor<JobsDAO> jobsDAOArgumentCaptor = ArgumentCaptor.forClass(JobsDAO.class);

    verify(jobsRepository).save(jobsDAOArgumentCaptor.capture());

    JobsDAO capturedJobs = jobsDAOArgumentCaptor.getValue();

    assertThat(capturedJobs).isEqualTo(data1);
  }

  @Test
  @Disabled
  void deleteJob() {
  }
}