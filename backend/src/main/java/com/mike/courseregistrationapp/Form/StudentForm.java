package com.mike.courseregistrationapp.Form;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class StudentForm {

    @NotBlank
    private String firstName;

    @NotBlank
    private String lastName;

    @NotBlank
    private String program;
}
