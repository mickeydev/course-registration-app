import React, { useContext, useEffect, useState } from "react";
import { Card, Typography, List, ListSubheader, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { ViewCourseAPI } from "../../services/CourseAPI";
import { courseDetails } from "../../types/Course";
import axios from "../../axiosConfig";
import { RegContext } from "../../store/register-context";

function CourseDashboardView() {
    const CTX = useContext(RegContext);

    return (
        <Card sx={{
            border: `solid 1px #333`
        }}>
            <List
                sx={{ width: '100%', bgcolor: 'background.paper' }}
                subheader={
                    <ListSubheader>
                        List of Courses
                    </ListSubheader>
                }
            >
                {
                    CTX.courseData.map(data => (
                        <ListItemButton sx={{ width: '100%' }} key={data.id}>
                            <ListItemIcon>
                                <ContentPasteIcon />
                            </ListItemIcon>
                            <ListItemText primary={data.title} secondary={data.prerequisite} />
                        </ListItemButton>
                    ))
                }
            </List>
        </Card>

    );
}

export default CourseDashboardView;