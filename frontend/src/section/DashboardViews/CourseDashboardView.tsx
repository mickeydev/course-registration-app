import React, { useContext, useEffect, useState } from "react";
import { Box, Card, Typography, List, ListSubheader, ListItemButton, ListItemIcon, ListItemText, ListItem, IconButton } from "@mui/material";
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from "../../axiosConfig";
import { RegContext } from "../../store/register-context";
import CourseUpdate from "../UpdateSection/CourseUpdate";

function CourseDashboardView() {
    const CTX = useContext(RegContext);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
        console.log(open);
    };
    const handleClose = () => {
        setOpen(false)
        console.log(open)
    };

    return (
        <Box>
            <CourseUpdate />
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
                                <ListItem
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="delete" onClick={handleOpen}>
                                            <EditIcon color="warning" />
                                        </IconButton>
                                    }>
                                    <ListItemIcon>
                                        <ContentPasteIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={data.title} secondary={data.prerequisite} />
                                </ListItem>
                            </ListItemButton>
                        ))
                    }
                </List>
            </Card>
        </Box>
    );
}

export default CourseDashboardView;