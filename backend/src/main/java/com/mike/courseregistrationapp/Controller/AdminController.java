package com.mike.courseregistrationapp.Controller;

import com.mike.courseregistrationapp.Entities.CourseDetails;
import com.mike.courseregistrationapp.Entities.InstructorDetails;
import com.mike.courseregistrationapp.Entities.Offering;
import com.mike.courseregistrationapp.Entities.StudentDetails;
import com.mike.courseregistrationapp.Form.CourseForm;
import com.mike.courseregistrationapp.Form.InstructorForm;
import com.mike.courseregistrationapp.Form.StudentForm;
import com.mike.courseregistrationapp.Service.AdminService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/api/v1")
public class AdminController {

    private final AdminService adminService;

    @Autowired
    public AdminController(AdminService adminService) {
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
    public ResponseEntity<String> addStudent(@RequestBody StudentForm studentForm){
        return new ResponseEntity<>(adminService.addStudent(studentForm), HttpStatus.CREATED);
    }

    @PostMapping(path = "add-course")
    public ResponseEntity<String> addCourse(@RequestBody CourseForm courseForm){
        return new ResponseEntity<>(adminService.addCourse(courseForm), HttpStatus.CREATED);
    }

    @PostMapping(path = "add-instructor")
    public ResponseEntity<String> addInstructor(@RequestBody InstructorForm instructorForm){
        return new ResponseEntity<>(adminService.addInstructor(instructorForm), HttpStatus.CREATED);
    }
}
