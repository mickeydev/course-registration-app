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
@Table(name = "student")
@Entity(name = "StudentDetails")
public class StudentDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "student_id")
    private Long id;

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

    @JsonIgnore
    @OneToMany(mappedBy = "student")
    List<Offering> offerings;
}
