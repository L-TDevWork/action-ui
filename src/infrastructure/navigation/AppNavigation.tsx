import type { JSX } from "react";
import { AppLayout } from "../../application/layout/AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingScreen } from "../../application/screens/landing/LandingScreen";
import { BlogScreen } from "../../application/screens/blog/BlogScreen";
import { MeetTheTeam } from "../../application/screens/meettheteam/MeetTheTeam";
import { Stories } from "../../application/screens/herosection/Stories";
import StoryDetail from "../../application/screens/herosection/StoryDetail";


export const AppNavigation: React.FC<{}> = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />}>
        <Route element={<LandingScreen />} path="/" />
        <Route element={<BlogScreen />} path="/blog" />
        <Route element={<MeetTheTeam />} path="/meet-the-team" />
        <Route element={<Stories />} path="/stories" />
        <Route element={<StoryDetail />} path="/stories/:id" /> {/* ✅ Add this */}
      </Route>
    </Routes>
  </BrowserRouter>
);
