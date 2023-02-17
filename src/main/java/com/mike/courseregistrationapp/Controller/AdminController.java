package com.mike.courseregistrationapp.Controller;

import com.mike.courseregistrationapp.Entities.Offering;
import com.mike.courseregistrationapp.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/admin/api/v1")
public class AdminController {

    private final AdminService adminService;

    @Autowired
    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping
    public List<Offering> getAllOffered(){
        return adminService.viewAllOffered();
    }
}
