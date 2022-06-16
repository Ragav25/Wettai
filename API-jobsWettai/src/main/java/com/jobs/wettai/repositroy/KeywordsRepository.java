package com.jobs.wettai.repositroy;

import com.jobs.wettai.dao.KeywordsDAO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface KeywordsRepository extends JpaRepository<KeywordsDAO, Long> {
  List<KeywordsDAO> findByKeyword(String keyword);
}
