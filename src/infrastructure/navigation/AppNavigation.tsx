import type { JSX } from "react";
import { AppLayout } from "../../application/layout/AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogView } from "../../application/screens/blogview/BlogView";
import { BlogScreen } from "../../application/screens/blog/BlogScreen";
import { Stories } from "../../application/screens/herosection/Stories";
import StoryDetail from "../../application/screens/herosection/StoryDetail";
import { DonateScreen } from "../../application/screens/donate/DonateScreen";
import { MeetTheTeam } from "../../application/screens/meettheteam/MeetTheTeam";
import { LandingScreen } from "../../application/screens/landing/LandingScreen";
import { PressRelease } from "../../application/screens/pressrelease/PressRelease";
import { WhereWeWorkScreen } from "../../application/screens/wherewework/WhereWeWorkScreen";
import { PressReleaseView } from "../../application/screens/pressreleaseview/PressReleaseView";
import { PublicationsScreen } from "../../application/screens/publications/PublicationsScreen";
import { ProgrammeApproach } from "../../application/screens/programapproach/ProgrammeApproach";
import { PublicationViewScreen } from "../../application/screens/publicationsview/PublicationsViewScreen";
import { VisionMissionScreen } from "../../application/screens/visionmission/VisionMissionScreen";
import { CooperateEngagementScreen } from "../../application/screens/cooperateengagement/CooperateEngagementScreen";
import { StrategicPrioritiesScreen } from "../../application/screens/strategicpriorities/StrategicPrioritiesScreen";
import { OurTeamsScreen } from "../../application/screens/ourteams/OurTeamsScreen";
import { ContactUsScreen } from "../../application/screens/contactus/ContactUsScreen";




export const AppNavigation: React.FC<{}> = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />}>
        <Route element={<LandingScreen />} path="/" />
        <Route element={<ContactUsScreen />} path="/contact-us" />
        <Route element={<OurTeamsScreen />} path="/our-teams" />
        <Route element={<BlogScreen />} path="/blog" />
        <Route element={<Stories />} path="/stories" />
        <Route element={<DonateScreen />} path="/donations" />
        <Route element={<StoryDetail />} path="/stories/:id" />
        <Route element={<MeetTheTeam />} path="/meet-the-team" />
        <Route element={<BlogView />} path="/blog-view/:name" />
        <Route element={<PressRelease />} path="/press-release" />
        <Route element={<WhereWeWorkScreen />} path="/where-we-work" />
        <Route element={<PublicationsScreen />} path="/publications" />
        <Route element={<VisionMissionScreen />} path="/vision-mission" />
        <Route element={<ProgrammeApproach />} path="/programme-approach" />
        <Route element={<CooperateEngagementScreen />} path="/Cooperate-Engagement" />
        <Route element={<PublicationViewScreen />} path="/publication/:name" />
        <Route element={<PressReleaseView />} path="/press-release-view/:name" />
        <Route element={<StrategicPrioritiesScreen />} path="/strategic-priorities" />
      </Route>
    </Routes>
  </BrowserRouter>
);
