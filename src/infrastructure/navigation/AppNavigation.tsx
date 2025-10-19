import type { JSX } from "react";

import { AppLayout } from "../../application/layout/AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogView } from "../../application/screens/blogview/BlogView";
import { BlogScreen } from "../../application/screens/blog/BlogScreen";
import { LandingScreen } from "../../application/screens/landing/LandingScreen";

export const AppNavigation: React.FC<{}> = (): JSX.Element => <BrowserRouter>
    <Routes>
        <Route element={<AppLayout />}>
            <Route element={<LandingScreen />} path="/"></Route>
            <Route element={<BlogScreen />} path="/blog"></Route>
            <Route element={<BlogView />} path="/blog-view/:name"></Route>
        </Route>
    </Routes>
</BrowserRouter>