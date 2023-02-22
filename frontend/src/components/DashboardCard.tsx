import React from "react";
import { Card, CardContent, IconButton, Typography } from "@mui/material"

type propType = {
    title: string;
    total: number;
}


function DashboardCard({ title, total }: propType) {

    return (
        <Card sx={{
            display: "flex", flexDirection: "column", alignItems: "center", p: 2, border: `solid 1px #0ccccc`
        }}>
            <Typography variant="subtitle1">{title}</Typography>
            <CardContent>
                <Typography variant="h3" fontWeight="bold">{total}</Typography>
            </CardContent>
        </Card>
    );
}


export default DashboardCard;