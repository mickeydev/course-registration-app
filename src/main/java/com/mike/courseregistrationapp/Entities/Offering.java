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
//    @Id
//    @SequenceGenerator(name = "offering_id_seq", sequenceName = "offering_id_seq")
//    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "offering_id_seq")
//    @Column(name = "offering_id", unique = true)
//    private Integer id;
    @EmbeddedId
    OfferingKey id;

    @Column(name = "time", nullable = false)
    private Date time;

    @Column(name = "section_no", nullable = false)
    private Integer sectionNo;

    @Column(name = "room_id", nullable = false)
    private Integer roomId;

    @Column(name = "year", nullable = false)
    private Integer year;

    @Column(name = "semester", nullable = false)
    private Character semester;

    @ManyToOne
    @MapsId("studentId")
    @JoinColumn(name = "student_id")
    private StudentDetails student;

    @ManyToOne
    @MapsId("courseId")
    @JoinColumn(name = "course_id")
    private CourseDetails course;

    @ManyToOne
    @MapsId("instructorId")
    @JoinColumn(name = "instructor_id")
    private InstructorDetails instructor;
}
