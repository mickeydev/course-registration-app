package com.mike.courseregistrationapp.Form;

import com.mike.courseregistrationapp.Entities.StudentDetails;
import com.mike.courseregistrationapp.Repo.StudentRepository;
import lombok.Data;

import java.util.Date;
import java.util.Optional;

@Data
public class OfferingForm {
    private Integer roomNo;
    private String time;
    private Integer sectionNo;
    private Integer year;
    private String semester;
    private Long student_id;
    private Long course_id;
    private Long instructor_id;
}
