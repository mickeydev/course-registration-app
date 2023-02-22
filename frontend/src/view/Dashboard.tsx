import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import DashboardCard from "../components/DashboardCard";
import DashboardCount from "../section/DashboardViews/DashboardCount";
import CourseDashboardView from "../section/DashboardViews/CourseDashboardView";
import StudentDashboardView from "../section/DashboardViews/StudentDashboardView";
import InstructorDashboardView from "../section/DashboardViews/InstructorDashboardView";

function Dashboard() {

    return (
        <Box m={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>Course Registeration Dashboard</Typography>
            <DashboardCount />
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <InstructorDashboardView />
                </Grid>
                <Grid item xs={12} md={4}>
                    <CourseDashboardView />
                </Grid>
                <Grid item xs={12} md={4}>
                    <StudentDashboardView />
                </Grid>
            </Grid>
        </Box>

    );
}

export default Dashboard;