package com.mike.courseregistrationapp.Service;

import com.mike.courseregistrationapp.Entities.CourseDetails;
import com.mike.courseregistrationapp.Entities.InstructorDetails;
import com.mike.courseregistrationapp.Entities.Offering;
import com.mike.courseregistrationapp.Entities.StudentDetails;
import com.mike.courseregistrationapp.Form.CourseForm;
import com.mike.courseregistrationapp.Form.InstructorForm;
import com.mike.courseregistrationapp.Form.OfferingForm;
import com.mike.courseregistrationapp.Form.StudentForm;

import java.util.List;

public interface AdminService {

    public List<Offering> viewAllOffered();

    public String addScheduling(OfferingForm offeringForm);

    public List<CourseDetails> getAllCourses();

    public String addCourse(CourseForm courseForm);

    public List<InstructorDetails> getAllInstructors();

    public String addInstructor(InstructorForm instructorForm);

    public List<StudentDetails> getAllStudent();

    public String addStudent(StudentForm studentForm);

    public String addOffered(OfferingForm offeringForm);
}
