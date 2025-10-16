import type { JSX } from "react";

import { AppLayout } from "../../application/layout/AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingScreen } from "../../application/screens/landing/LandingScreen";

export const AppNavigation: React.FC<{}> = (): JSX.Element => <BrowserRouter>
    <Routes>
        <Route element={<AppLayout />}>
            <Route element={<LandingScreen />} path="/"></Route>
        </Route>
    </Routes>
</BrowserRouter>