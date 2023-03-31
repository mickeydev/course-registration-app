package com.mike.courseregistrationapp.Form;

import com.mike.courseregistrationapp.Entities.CourseDetails;
import com.mike.courseregistrationapp.Entities.InstructorDetails;
import com.mike.courseregistrationapp.Entities.StudentDetails;
import com.mike.courseregistrationapp.Repo.StudentRepository;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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

    @NotNull
    private StudentDetails studentDetails;

    @NotNull
    private CourseDetails courseDetails;

    @NotNull
    private InstructorDetails instructorDetails;
}
