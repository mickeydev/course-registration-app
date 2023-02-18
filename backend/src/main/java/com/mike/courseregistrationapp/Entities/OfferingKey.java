package com.mike.courseregistrationapp.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.*;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
@Embeddable
public class OfferingKey implements Serializable {
    @Column(name = "student_id")
    Integer studentId;

    @Column(name = "course_id")
    Integer courseId;

    @Column(name = "Instructor_id")
    Integer instructorId;
}
