import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Repositorio from "./pages/Repositorio";

export default function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/projeto-repositorios/" element={<Main />} />
                <Route path="/projeto-repositorios/repositorio/:repo_name" element={<Repositorio />} />
            </Routes>
        </BrowserRouter>
    )
};
