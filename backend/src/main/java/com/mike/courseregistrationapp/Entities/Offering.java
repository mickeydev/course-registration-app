package com.mike.courseregistrationapp.Entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.Optional;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Table(name = "offering")
@Entity(name = "Offering")
public class Offering {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "offering_id")
    private Long id;

    private Integer roomNo;

    @Column(name = "section_no", nullable = false)
    private Integer sectionNo;

    @Column(name = "year", nullable = false)
    private Integer year;

    @Column(name = "semester", nullable = false)
    private String semester;

    @Column(name = "time", nullable = false)
    private String time;

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
