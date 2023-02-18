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
@Table(name = "instructor")
@Entity(name = "InstructorDetails")
public class InstructorDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "instructor_id")
    private Long id;

    @Column(name = "name", nullable = false, columnDefinition = "VARCHAR(255)")
    private String name;

    @Column(name = "department", nullable = false, columnDefinition = "VARCHAR(255)")
    private String department;

    @Column(name = "title", nullable = false, columnDefinition = "VARCHAR(200)")
    private String title;

    @JsonIgnore
    @OneToMany(mappedBy = "instructor")
    List<Offering> offerings;
}
