import React, { useContext, useEffect, useState } from "react";
import { Box, Card, Typography, List, ListSubheader, ListItemButton, ListItemIcon, ListItemText, ListItem, IconButton } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit';
import { RegContext } from "../../store/register-context";

function StudentDashboardView() {
    const CTX = useContext(RegContext);


    return (
        <Card sx={{
            border: `solid 1px #333`
        }}>
            <List
                sx={{ width: '100%', bgcolor: 'background.paper' }}
                subheader={
                    <ListSubheader>
                        List of Students
                    </ListSubheader>
                }
            >
                {
                    CTX.studentData.map(data => (
                        <ListItemButton sx={{ width: '100%' }} key={data.id}>
                            <ListItem secondaryAction={
                                <IconButton edge="end" aria-label="delete">
                                    <EditIcon color="warning" />
                                </IconButton>
                            }>
                                <ListItemIcon>
                                    <SchoolIcon />
                                </ListItemIcon>
                                <ListItemText primary={`${data.firstName} ${data.lastName}`} secondary={data.program} />
                            </ListItem>
                        </ListItemButton>
                    ))
                }
            </List>
        </Card>

    );
}

export default StudentDashboardView;