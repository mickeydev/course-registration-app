package com.mike.courseregistrationapp.Form;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class InstructorForm {

    @NotBlank
    private String title;

    @NotBlank
    private String name;

    @NotBlank
    private String department;
}
