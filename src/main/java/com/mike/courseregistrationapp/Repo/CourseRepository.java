package com.mike.courseregistrationapp.Repo;

import com.mike.courseregistrationapp.Entities.CourseDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<CourseDetails, Integer> {
}
