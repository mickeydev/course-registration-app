package com.mike.courseregistrationapp.Repo;

import com.mike.courseregistrationapp.Entities.StudentDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<StudentDetails, Long> {
}
