package com.mike.courseregistrationapp.Entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Table(name = "offering")
@Entity(name = "Offering")
public class Offering {
    @Id
    @Column(name = "offering_id")
    private Long id;

    private Integer roomNo;

    @Column(name = "time", nullable = false)
    private Date time;

    @Column(name = "section_no", nullable = false)
    private Integer sectionNo;

    @Column(name = "year", nullable = false)
    private Integer year;

    @Column(name = "semester", nullable = false)
    private Character semester;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private StudentDetails student;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private CourseDetails course;

    @ManyToOne
    @JoinColumn(name = "instructor_id")
    private InstructorDetails instructor;
}
