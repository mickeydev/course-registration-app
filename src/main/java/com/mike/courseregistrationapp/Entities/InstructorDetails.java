package com.mike.courseregistrationapp.Entities;

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
    @SequenceGenerator(name = "instructor_id_seq", sequenceName = "instructor_id_seq")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "instructor_id_seq")
    @Column(name = "instructor_id", unique = true)
    private Integer id;

    @Column(name = "name", nullable = false, columnDefinition = "VARCHAR(255)")
    private String name;

    @Column(name = "department", nullable = false, columnDefinition = "VARCHAR(255)")
    private String department;

    @Column(name = "title", nullable = false, columnDefinition = "VARCHAR(200)")
    private String title;

    @OneToMany(mappedBy = "instructor")
    @ToString.Exclude
    private List<Offering> offerings;
}
