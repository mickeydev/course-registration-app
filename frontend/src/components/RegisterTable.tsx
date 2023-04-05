import React, { useContext, useState } from 'react'
import { RegContext } from '../store/register-context';
import { DataGrid, GridRowProps, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { tableData } from '../types/register';


function RegisterTable() {
    const registerDetails = useContext(RegContext).tableData;

    const columns: GridColDef[] = [
        { field: "id", headerName: "id", width: 150 },
        { field: "sectionNo", headerName: "Section No", width: 150 },
        { field: "semester", headerName: "Semester", width: 150 },
        { field: "year", headerName: "Year", width: 150 },
        { field: "time", headerName: "Class Time", width: 150 },
        { field: "roomNo", headerName: "Room No", width: 150 },
        { field: "studentName", headerName: "Student Name", width: 200 },
        { field: "teacherName", headerName: "Teacher Name", width: 200 },
        { field: "subjectName", headerName: "Subject Name", width: 200 },
    ]



    return (
        <Box width="100%" height={500}>
            <DataGrid rows={registerDetails} columns={columns} />
        </Box>
    )
}

export default RegisterTable;