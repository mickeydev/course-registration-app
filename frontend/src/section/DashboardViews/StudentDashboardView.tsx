import React, { useContext, useEffect, useState } from "react";
import { Card, Typography, List, ListSubheader, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
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
                            <ListItemIcon>
                                <SchoolIcon />
                            </ListItemIcon>
                            <ListItemText primary={`${data.firstName} ${data.lastName}`} secondary={data.program} />
                        </ListItemButton>
                    ))
                }
            </List>
        </Card>

    );
}

export default StudentDashboardView;