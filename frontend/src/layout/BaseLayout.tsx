import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Grid, useTheme } from '@mui/material';
import TopBar from './TopBar';
import Dashboard from '../view/Dashboard';
import Register from '../view/Register';
import Add from '../view/Add';

const BaseLayout = () => {
   return (
      <Box>
         <TopBar />
         <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add" element={<Add />} />
         </Routes>
      </Box>
   );
};

export default BaseLayout;
