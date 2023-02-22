import React, { useContext } from "react";
import { Card, List, ListSubheader, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
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
                            <ListItemIcon>
                                <FilterFramesIcon />
                            </ListItemIcon>
                            <ListItemText primary={`${data.title}. ${data.name}`} secondary={data.department} />
                        </ListItemButton>
                    ))
                }
            </List>
        </Card>

    );
}

export default InstructorDashboardView;