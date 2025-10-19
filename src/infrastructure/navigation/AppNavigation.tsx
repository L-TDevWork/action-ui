import type { JSX } from "react";
import { AppLayout } from "../../application/layout/AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogView } from "../../application/screens/blogview/BlogView";
import { BlogScreen } from "../../application/screens/blog/BlogScreen";
import { Stories } from "../../application/screens/herosection/Stories";
import StoryDetail from "../../application/screens/herosection/StoryDetail";
import { MeetTheTeam } from "../../application/screens/meettheteam/MeetTheTeam";
import { LandingScreen } from "../../application/screens/landing/LandingScreen";
import { PressRelease } from "../../application/screens/pressrelease/PressRelease";
import { PressReleaseView } from "../../application/screens/pressreleaseview/PressReleaseView";


export const AppNavigation: React.FC<{}> = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />}>
        <Route element={<LandingScreen />} path="/" />
        <Route element={<BlogScreen />} path="/blog" />
        <Route element={<Stories />} path="/stories" />
        <Route element={<StoryDetail />} path="/stories/:id" />
        <Route element={<MeetTheTeam />} path="/meet-the-team" />
        <Route element={<BlogView />} path="/blog-view/:name"></Route>
        <Route element={<PressRelease />} path="/press-release" />
        <Route element={<PressReleaseView />} path="/press-release-view/:name" />
      </Route>
    </Routes>
  </BrowserRouter>
);
