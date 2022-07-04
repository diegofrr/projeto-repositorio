import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Repositorio from "./pages/Repositorio";

export default function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/repos_project/" element={<Main />} />
                <Route path="/repos_project/repositorio/:repo_name" element={<Repositorio />} />
            </Routes>
        </BrowserRouter>
    )
};
