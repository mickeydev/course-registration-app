package com.mike.courseregistrationapp.Service;

import com.mike.courseregistrationapp.Entities.Offering;
import com.mike.courseregistrationapp.Repo.CourseRepository;
import com.mike.courseregistrationapp.Repo.InstructorRepository;
import com.mike.courseregistrationapp.Repo.OfferingRepository;
import com.mike.courseregistrationapp.Repo.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {

    private final CourseRepository courseRepository;
    private final StudentRepository studentRepository;
    private final InstructorRepository instructorRepository;
    private final OfferingRepository offeringRepository;

    public AdminService(CourseRepository courseRepository,
                        StudentRepository studentRepository,
                        InstructorRepository instructorRepository,
                        OfferingRepository offeringRepository) {
        this.courseRepository = courseRepository;
        this.studentRepository = studentRepository;
        this.instructorRepository = instructorRepository;
        this.offeringRepository = offeringRepository;
    }


    public List<Offering> viewAllOffered() {
        return offeringRepository.findAll();
    }

}
