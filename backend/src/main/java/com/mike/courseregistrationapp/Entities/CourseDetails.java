package com.mike.courseregistrationapp.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "course_id")
    private Long id;

    @Column(name = "title", nullable = false, columnDefinition = "VARCHAR(255)")
    private String title;

    @Column(name = "prerequisite", nullable = false, columnDefinition = "VARCHAR(255)")
    private String prerequisite;

    @JsonIgnore
    @OneToMany(mappedBy = "course")
    List<Offering> offerings;
}
