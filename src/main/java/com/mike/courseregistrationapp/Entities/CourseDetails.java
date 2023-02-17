package com.mike.courseregistrationapp.Entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Table(name = "course")
@Entity(name = "CourseDetails")
public class CourseDetails {
    @Id
    @SequenceGenerator(name = "course_id_seq", sequenceName = "course_id_seq")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "course_id_seq")
    @Column(name = "course_id", unique = true)
    private Integer id;

    @Column(name = "title", nullable = false, columnDefinition = "VARCHAR(255)")
    private String title;

    @Column(name = "prerequisite", nullable = false, columnDefinition = "VARCHAR(255)")
    private String prerequisite;

    @OneToMany(mappedBy = "course")
    @ToString.Exclude
    private List<Offering> offerings;
}
