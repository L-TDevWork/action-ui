import type { JSX } from "react";
import { RedBoarder } from "../../../infrastructure/shared/redborder/RedBoarder";

import ThameticCardImgOne from "../../../assets/images/about-us.png";
import ThameticCardImgTwo from "../../../assets/images/slide/IMG_1077.jpg";
import ThameticCardImgFour from "../../../assets/images/slide/slider-05.jpg";
import ThameticCardImgThree from "../../../assets/images/slide/Wrap day 3.jpg";

export const StrategicPrioritiesScreen: React.FC<{}> = (): JSX.Element => {
    return <div className="screen-container">
        <div className="screen-content">
            <h1>Thematic Areas</h1>
            <RedBoarder />
            <br /> <br />
            <div className="our-programs-areas">
                <div className="area-programs flex">
                    <div className="program" style={{ backgroundImage: `url(${ThameticCardImgOne})` }}>
                        <div className="program-summary">
                            <h4 className="font-bold">Advance Climate Justice and Resilience</h4>
                            <p>G Advocate for climate policies that prioritise justice and sustainability for marginalised communities. AASA will support early warning systems, emergency response, and long-term resilience programming rooted in community agency and environmental justice.                    </p>
                        </div>
                    </div>

                    <div className="program" style={{ backgroundImage: `url(${ThameticCardImgThree})` }}>
                        <div className="program-summary">
                            <h4 className="font-bold">Promote Women’s Rights and Gender Equality</h4>
                            <p>Address all forms of gender-based violence and discrimination through advocacy, partnerships, law reform, and awareness-raising. AASA will support the economic empowerment of women, including campaigns on unpaid care work and access to productive resources.</p>
                        </div>
                    </div>

                    <div className="program" style={{ backgroundImage: `url(${ThameticCardImgTwo})` }}>
                        <div className="program-summary">
                            <h4 className="font-bold">Champion Youth Leadership and Economic Empowerment</h4>
                            <p>Strengthen youth leadership through civic education, enterprise development, and digital organising. Young people will be supported to lead transformative change in their communities and engage in policy processes.</p>
                        </div>
                    </div>

                    <div className="program" style={{ backgroundImage: `url(${ThameticCardImgFour})` }}>
                        <div className="program-summary">
                            <h4 className="font-bold">Strengthen Human Rights and Democratic Governance</h4>
                            <p>Advance civic participation, state accountability, and the protection of human rights defenders. AASA will work to ensure inclusive governance structures that reflect the needs and voices of marginalised groups.</p>
                        </div>
                    </div>
                </div>
            </div>
            <br /> <br />
        </div>
    </div>
}