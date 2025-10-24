import type { JSX } from "react";
import { RedBoarder } from "../../../infrastructure/shared/redborder/RedBoarder";

import { GetIcon } from "../../../infrastructure/shared/icons/GetIcon";
import Cooperate from "../../../assets/images/Cooperate-engagement/corporate-engagement.jpg";

interface TeamMember {
  image: string;
}
const teamMembers: TeamMember[] = [
  {
    image: Cooperate,
  },
];
export const CooperateEngagementScreen: React.FC<{}> = (): JSX.Element => {
  const renderTeam = (members: TeamMember[]): JSX.Element[] =>
    members.map((member, index) => (
      <div key={index} className="image-item-cooperate">
        <h1 className="image-heading"></h1>
        <div className="image-wrapper">
          <img src={member.image} />
        </div>
      </div>
    ));
  return (
    <div className="screen-container vision-mission">
      <div className="screen-content">
        <div className="area-programs flex">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="cooperate-page">
                <h1>Corporate Engagement</h1>
                <RedBoarder />
                <div className="separator"></div>
                <p>
                  As a corporate you want to play an active role in bringing
                  changes in people’s lives. We share your vision of social
                  responsibility and sustainability. We have been working with
                  the most marginalized communities for the past 20 years to
                  create impact on millions of lives. We are currently engaged
                  in more than 100 short term and long term projects spread
                  across the country. We work with communities as an equal
                  partner and believe in community driven solutions.
                </p>
                <h1>When You Partner With Us You Can We Assured Of</h1>
                  <RedBoarder />
                <div className="separator"></div>
              </div>
            </div>
            <div className="et_pb_module et_pb_image et_pb_image_0"></div>
          </div>
        </div>
        <div className="et_pb_module et_pb_image et_pb_image_0">
          <span className="et_pb_image_wrap ">
            <div className="image-section">
              <div className="top-images cooperate-image">
                {renderTeam(teamMembers.slice(0, 1))}
              </div>
            </div>
          </span>
        </div>

        <div className="d-flex m-8">
              <div className="et_pb_text_inner">
                <h1>Current Interventions</h1>
                  <RedBoarder />
                <div className="separator"></div>
                <p>
                  Our corporate alliance is active and growing. We are currently
                  partnering with socially responsible corporates on diverse
                  causes like womxn, Child education with special emphasis on
                  girl child education, sustainable agriculture, climate change,
                  bonded labours , skill building for informal sector workers
                  and their livelihoods, urban poverty.
                </p>
              </div>
           
          <div className=" et_pb_column_1_2 ">
                <h1>Transparency &amp; Accountability</h1>
                  <RedBoarder />
                <div className="separator"></div>
                <p>
                  We strive to develop our programmes with the involvement of
                  the communities we claim to work with. This makes transparency
                  a dual responsibility for us- we are as accountable to you,
                  our donor and we are equally responsible to the communities we
                  work with. This will be visible in the way we report back-
                  while we send updates, event reports, regular reports to our
                  funders, we also ensure that the money we spend on a community
                  is known to them.
                </p>
              
          </div>
        </div>
      </div>
    </div>
  );
};
