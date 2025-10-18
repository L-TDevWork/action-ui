import type { JSX } from "react";

import { AppLayout } from "../../application/layout/AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingScreen } from "../../application/screens/landing/LandingScreen";
import { BlogScreen } from "../../application/screens/blog/BlogScreen";

export const AppNavigation: React.FC<{}> = (): JSX.Element => <BrowserRouter>
    <Routes>
        <Route element={<AppLayout />}>
            <Route element={<LandingScreen />} path="/"></Route>
            <Route element={<BlogScreen />} path="/blog"></Route>
        </Route>
    </Routes>
</BrowserRouter>