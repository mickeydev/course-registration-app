package com.mike.courseregistrationapp.Repo;

import com.mike.courseregistrationapp.Entities.Offering;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OfferingRepository extends JpaRepository<Offering, Integer> {
}
