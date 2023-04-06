import React, { useContext } from "react";
import { Card, List, ListSubheader, ListItemButton, ListItemIcon, ListItemText, ListItem, IconButton, Box } from "@mui/material";
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from '@mui/icons-material/Edit';
import axios from "../../axiosConfig";
import { RegContext } from "../../store/register-context";

function InstructorDashboardView() {
    const CTX = useContext(RegContext)

    return (
        <Card sx={{
            border: `solid 1px #333`
        }}>
            <List
                sx={{ width: '100%', bgcolor: 'background.paper' }}
                subheader={
                    <ListSubheader>
                        List of Instructors
                    </ListSubheader>
                }
            >
                {
                    CTX.instructorData.map(data => (
                        <ListItemButton sx={{ width: '100%' }} key={data.id}>
                            <ListItem
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete">
                                        <EditIcon color="warning" />
                                    </IconButton>
                                }>
                                <ListItemIcon>
                                    <FilterFramesIcon />
                                </ListItemIcon>
                                <ListItemText primary={`${data.title}. ${data.name}`} secondary={data.department} />
                            </ListItem>
                        </ListItemButton>
                    ))
                }
            </List>
        </Card>

    );
}

export default InstructorDashboardView;