import type { JSX } from "react";

import { AppLayout } from "../../application/layout/AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const AppNavigation: React.FC<{}> = (): JSX.Element => <BrowserRouter>
    <Routes>
        <Route element={<AppLayout />}>
        </Route>
    </Routes>
</BrowserRouter>