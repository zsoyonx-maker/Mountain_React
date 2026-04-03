import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import SiteView from "./views/SiteView";

import link from "./utils/link";
import lenis from "./utils/lenis";

const App = () => {
    useEffect(() => {
        link();
        lenis();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/about" element={<AboutView />} />
                <Route path="/site" element={<SiteView />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
