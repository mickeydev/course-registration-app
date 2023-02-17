package com.mike.courseregistrationapp.Repo;

import com.mike.courseregistrationapp.Entities.InstructorDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InstructorRepository extends JpaRepository<InstructorDetails, Long> {
}
