import React from 'react'

import { Routes, Route } from "react-router-dom";

import Main from './pages/Main';
import Form from './pages/Form';

const MainRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Main />} />
            <Route path={'explore'} element={<Form />} />
        </Routes>
    );
}

export default MainRoutes;