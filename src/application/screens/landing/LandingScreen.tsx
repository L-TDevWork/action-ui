import type { JSX } from "react"
import { SlideShow } from "../../../infrastructure/shared/slideshow/SlideShow";

import YUWImage from "../../../assets/images/YUW-2-150x150.png";
import NaturalImage from "../../../assets/images//naturalresources.jpg";
import CEWImage from "../../../assets/images/Untitled-design-150x150.png";

export const LandingScreen: React.FC<{}> = (): JSX.Element => {
    return <>
        <div className="slide-show-area">
            <SlideShow />
        </div>

        <div className="options-area flex justify-between">
            <div className="call-to-action option-container">
                <h4>CALL TO ACTION</h4>
                <div className="minor-btn" style={{
                    borderRadius: "50px",
                    border: "2px solid #ffffff",
                    width: "20%",
                    textAlign: "center"
                }}>
                    <span>CONTACT US</span>
                </div>
            </div>
            <div className="call-to-action option-container">
                <h4>CALL TO ACTION</h4>
                <div className="minor-btn" style={{
                    borderRadius: "50px",
                    border: "2px solid #ffffff",
                    width: "20%",
                    textAlign: "center"
                }}>
                    <span>CONTACT US</span>
                </div>
            </div>
            <div className="call-to-action option-container">
                <h4>CALL TO ACTION</h4>
                <div className="minor-btn" style={{
                    borderRadius: "50px",
                    border: "2px solid #ffffff",
                    width: "20%",
                    textAlign: "center"
                }}>
                    <span>CONTACT US</span>
                </div>
            </div>
        </div>

        <div className="our-programs-area">
            <h1>Our Programme Areas</h1>
            <div className="red-border" style={{ border: "2px solid red", width: 100, display: "flex", justifyContent: "center" }}></div>
            <br />
            <p>ActionAid South Africa was established is a part of Action Aid International, an anti-poverty agency working with poor people in over 40 countries.</p>

            <br /> <br /> <br />
            <div className="area-programs flex">
                <div className="program">
                    <br />
                    <img src={CEWImage} alt="cew" />
                    <br />
                    <h4>Generation G</h4>
                    <br />
                    <p>Generation G South Africa (Gen G) is a youth program run by three partners: Activate Change Drivers, ActionAid SA, and SONKE Gender Justice.</p>
                    <div className="read-more" style={{ background: "red", borderRadius: 5, textAlign: "center" }}>
                        <span>Read More</span>
                    </div>
                </div>
                <div className="program">
                    <br />
                    <img src={YUWImage} alt="yuw" />
                    <br />
                    <h4>Young Urban Women</h4>
                    <br />
                    <p>The Young Urban Women Movement SA is part of a global network spanning Uganda, Malawi, Zimbabwe, the UK, and the USA.</p>
                    <br />
                    <div className="read-more" style={{ background: "red", borderRadius: 5, textAlign: "center" }}>
                        <span>Read More</span>
                    </div>
                </div>
                <div className="program">
                    <br />
                    <img src={NaturalImage} alt="natural" />
                    <br /><br />
                    <h4 style={{ paddingTop: 15 }}>Natural Resources</h4>
                    <br />
                    <p>We support mining affected communities and strive to empower womxn and youth in claiming and defending their rights to land and food sovereignty.</p>
                    <div className="read-more" style={{ background: "red", borderRadius: 5, textAlign: "center" }}>
                        <span>Read More</span>
                    </div>
                </div>
            </div>
        </div>
    </>
}