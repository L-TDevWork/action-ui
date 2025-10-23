import type { JSX } from "react";
import { RedBoarder } from "../../../infrastructure/shared/redborder/RedBoarder";

import VisionImage from "../../../assets/images/vision.png";
import { GetIcon } from "../../../infrastructure/shared/icons/GetIcon";

export const VisionMissionScreen: React.FC<{}> = (): JSX.Element => {
  return (
    <div className="screen-container vision-mission">
      <div className="screen-content">
        <h1>Vision Mission</h1>
        <RedBoarder />

        <div className="upper-content flex">
          <div className="left-area">
            <div className="vision-area">
              <h4 className="font-bold">Vision</h4>
              <p>
                ActionAid South Africa (AASA) has a clear <b>vision</b> of
                realising <b>social justice</b> through supporting the
                <b>actions</b> and <b>power of people</b> whose lives are most
                affected by inequality, injustice and oppression. And so, we
                commit to supporting social movements of the poor, excluded and
                marginalised, prioritising our support for womxn-led feminist
                movements.
              </p>

              <p>
                In a post-apartheid South Africa, we have seen some successes in
                realising individual rights, but collective{" "}
                <b>rights’ realisation</b> of people living in poverty and
                marginalisation, has been limited. To AASA,{" "}
                <b>structural change</b> is required to realise{" "}
                <b>social justice</b>.
              </p>
            </div>
            <div className="mission-area">
              <h4 className="font-bold">Mission</h4>
              <p>
                To Work With Poor And Excluded People To Eradicate Poverty And
                Injustice. To eradicate poverty and injustice by working with
                people living in poverty and exclusion, civil society
                organisations, activists and movements wherever they are.
              </p>
            </div>
          </div>
          <div className="right-area">
            <img src={VisionImage} alt="vision" />
          </div>
        </div>
        <div className="et_pb_row et_pb_row_1">
          <div className="et_pb_column et_pb_column_1_2 et_pb_column_1  et_pb_css_mix_blend_mode_passthrough">
            <div className="et_pb_module et_pb_text et_pb_text_1  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <h1>Current Interventions</h1>
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
            </div>
          </div>
          <div className="et_pb_column et_pb_column_1_2 et_pb_column_2  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_2  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <h1>Transparency &amp; Accountability</h1>
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
      </div>
    </div>
  );
};
