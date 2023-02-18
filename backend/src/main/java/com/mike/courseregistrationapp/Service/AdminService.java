package com.mike.courseregistrationapp.Service;

import com.mike.courseregistrationapp.Entities.CourseDetails;
import com.mike.courseregistrationapp.Entities.InstructorDetails;
import com.mike.courseregistrationapp.Entities.Offering;
import com.mike.courseregistrationapp.Entities.StudentDetails;
import com.mike.courseregistrationapp.Form.CourseForm;
import com.mike.courseregistrationapp.Form.InstructorForm;
import com.mike.courseregistrationapp.Form.OfferingForm;
import com.mike.courseregistrationapp.Form.StudentForm;
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


    public String addScheduling(OfferingForm offeringForm){
        Offering offering = new Offering();

        offering.setRoomNo(offeringForm.getRoomNo());
        offering.setSectionNo(offeringForm.getSectionNo());
        offering.setSemester(offeringForm.getSemester());
        offering.setYear(offeringForm.getYear());
        offering.setTime(offeringForm.getTime());

        offeringRepository.save(offering);
        return "Student course schedule is registered";
    }

    public List<CourseDetails> getAllCourses(){return courseRepository.findAll();}

    public String addCourse(CourseForm courseForm){
        CourseDetails courseDetails = new CourseDetails();

        courseDetails.setTitle(courseForm.getTitle());
        courseDetails.setPrerequisite(courseForm.getPrerequisite());

        courseRepository.save(courseDetails);

        return "Course added successfully";
    }

    public List<InstructorDetails> getAllInstructors(){return instructorRepository.findAll();}

    public String addInstructor(InstructorForm instructorForm){
        InstructorDetails instructorDetails = new InstructorDetails();

        instructorDetails.setTitle(instructorForm.getTitle());
        instructorDetails.setName((instructorForm.getName()));
        instructorDetails.setDepartment(instructorForm.getDepartment());

        instructorRepository.save(instructorDetails);

        return "Instructor added successfully";
    }

    public List<StudentDetails> getAllStudent(){return studentRepository.findAll();}

    public String addStudent(StudentForm studentForm){
        StudentDetails studentDetails = new StudentDetails();

        studentDetails.setFirstName(studentForm.getFirstName());
        studentDetails.setLastName(studentForm.getLastName());
        studentDetails.setProgram(studentForm.getProgram());

        studentRepository.save(studentDetails);

        return "Student added successfully";
    }
}
