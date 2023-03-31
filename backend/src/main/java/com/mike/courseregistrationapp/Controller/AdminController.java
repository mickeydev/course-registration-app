package com.mike.courseregistrationapp.Controller;

import com.mike.courseregistrationapp.Entities.CourseDetails;
import com.mike.courseregistrationapp.Entities.InstructorDetails;
import com.mike.courseregistrationapp.Entities.Offering;
import com.mike.courseregistrationapp.Entities.StudentDetails;
import com.mike.courseregistrationapp.Form.CourseForm;
import com.mike.courseregistrationapp.Form.InstructorForm;
import com.mike.courseregistrationapp.Form.OfferingForm;
import com.mike.courseregistrationapp.Form.StudentForm;
import com.mike.courseregistrationapp.Service.impl.AdminServiceImpl;
import com.mike.courseregistrationapp.exception.InvalidFormException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/api/v1")
@CrossOrigin(origins = "*")
public class AdminController {

    private final AdminServiceImpl adminService;

    @Autowired
    public AdminController(AdminServiceImpl adminService) {
        this.adminService = adminService;
    }

    @GetMapping
    public List<Offering> getAllOffered(){
        return adminService.viewAllOffered();
    }

    @GetMapping(path = "view-courses")
    public List<CourseDetails> getAllCourses(){return adminService.getAllCourses();}

    @GetMapping(path = "view-students")
    public List<StudentDetails> getAllStudents(){return adminService.getAllStudent();}

    @GetMapping(path = "view-instructors")
    public List<InstructorDetails> getAllInstructors(){return adminService.getAllInstructors();}

    @PostMapping(path = "add-student")
    public ResponseEntity<String> addStudent(@RequestBody @Valid StudentForm studentForm) throws InvalidFormException {
        try {
            return new ResponseEntity<>(adminService.addStudent(studentForm), HttpStatus.CREATED);
        }
        catch (Exception e){
            throw new InvalidFormException("Form is not valid");
        }
    }

    @PostMapping(path = "add-course")
    public ResponseEntity<String> addCourse(@RequestBody @Valid CourseForm courseForm) throws InvalidFormException{
        try{
            return new ResponseEntity<>(adminService.addCourse(courseForm), HttpStatus.CREATED);
        }
        catch (Exception e){
            throw new InvalidFormException("Form is not valid");
        }
    }

    @PostMapping(path = "add-instructor")
    public ResponseEntity<String> addInstructor(@RequestBody @Valid InstructorForm instructorForm) throws InvalidFormException {
        try{
            return new ResponseEntity<>(adminService.addInstructor(instructorForm), HttpStatus.CREATED);
        }
        catch (Exception e) {
            throw new InvalidFormException("Form is not valid");
        }
    }

    @PostMapping(path = "register")
    public ResponseEntity<String> registerStudent(@RequestBody @Valid OfferingForm offeringForm) throws InvalidFormException {
        try {
            return new ResponseEntity<>(adminService.addOffered(offeringForm), HttpStatus.CREATED);
        }
        catch (Exception e) {
            throw new InvalidFormException("Form is not valid");
        }
    }

}
