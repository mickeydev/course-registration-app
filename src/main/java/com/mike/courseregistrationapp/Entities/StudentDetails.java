package com.mike.courseregistrationapp.Entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Table(name = "student")
@Entity(name = "StudentDetails")
public class StudentDetails {
    @Id
    @SequenceGenerator(name = "student_id_seq", sequenceName = "student_id_seq")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "student_id_seq")
    @Column(name = "student_id", unique = true)
    private Integer id;

    @Column(
            name = "first_name",
            nullable = false,
            columnDefinition = "VARCHAR(255)"
    )
    private String firstName;

    @Column(
            name = "last_name",
            nullable = false,
            columnDefinition = "VARCHAR(255)"
    )
    private String lastName;

    @Column(
            name = "program",
            nullable = false,
            columnDefinition = "VARCHAR(255)"
    )
    private String program;

    @OneToMany(mappedBy = "student")
    @ToString.Exclude
    private List<Offering> offerings;
}
