import { Box, Grid } from "@mui/material"
import StudentForm from "../section/AddSections/StudentForm"
import StudentDashboardView from "../section/DashboardViews/StudentDashboardView"
import InstructorForm from "../section/AddSections/InstructorForm"
import InstructorDashboardView from "../section/DashboardViews/InstructorDashboardView"
import CourseForm from "../section/AddSections/CourseForm"
import CourseDashboardView from "../section/DashboardViews/CourseDashboardView"

function Add() {

    return (
        <Box m={2}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <InstructorForm />
                    <InstructorDashboardView />
                </Grid>
                <Grid item xs={12} md={4}>
                    <StudentForm />
                    <StudentDashboardView />
                </Grid>
                <Grid item xs={12} md={4}>
                    <CourseForm />
                    <CourseDashboardView />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Add