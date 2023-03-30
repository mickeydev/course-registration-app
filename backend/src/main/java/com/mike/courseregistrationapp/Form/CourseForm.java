package com.mike.courseregistrationapp.Form;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;


@Data
public class CourseForm {

    @NotBlank(message = "title can not be left blank")
    private String title;

    @NotBlank(message = "prerequisite can be left blank")
    private String prerequisite;
}
