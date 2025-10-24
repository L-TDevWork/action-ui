import { useEffect, useState, type JSX } from "react"
import { SlideShow } from "../../../infrastructure/shared/slideshow/SlideShow";
import { PieChart } from "../../../infrastructure/shared/charts/LadingPieChart";
import { useCountriesApis } from "../../../infrastructure/shared/hooks/countries/useCountriesApis";

import ThameticCardImgOne from "../../../assets/images/about-us.png";
import ThameticCardImgTwo from "../../../assets/images/slide/IMG_1077.jpg";
import ThameticCardImgFour from "../../../assets/images/slide/slider-05.jpg";
import ThameticCardImgThree from "../../../assets/images/slide/Wrap day 3.jpg";

import SubscriptionBG from "../../../assets/images/bg_main.jpg";
import ProgramAreaBG from "../../../assets/images/bricks.48d46829b3490b0185d2.jpg";

export const LandingScreen: React.FC<{}> = (): JSX.Element => {
    const { getCountries } = useCountriesApis();

    const [CountriesList, setCountriesList] = useState<TCountry[]>([]);

    useEffect(() => {
        (async () => {
            setCountriesList(await getCountries());
        })();
    }, []);

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
                    width: "25%",
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
                    width: "25%",
                    textAlign: "center"
                }}>
                    <span>DONATE NOW</span>
                </div>
            </div>
            <div className="call-to-action option-container">
                <h4>CALL TO ACTION</h4>
                <div className="minor-btn" style={{
                    borderRadius: "50px",
                    border: "2px solid #ffffff",
                    width: "25%",
                    textAlign: "center"
                }}>
                    <span>CONNECT WITH US</span>
                </div>
            </div>
        </div>

        <div className="our-programs-area">
            <h1>Thematic Areas</h1>
            <div className="red-border" style={{ border: "2px solid red", width: 100, display: "flex", justifyContent: "center" }}></div>
            <br />
            <p>ActionAid South Africa was established is a part of Action Aid International, an anti-poverty agency working with poor people in over 40 countries.</p>
        </div>
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

        <div className="programs-parent-area" style={{ backgroundImage: `url(${ProgramAreaBG})` }}>
            <div className="parent-area-overlay">
                <div className="the-chosen-areas">
                    <h1>Why We Have Chosen These Areas</h1>
                    <div className="red-border" style={{
                        border: "2px solid red",
                        width: 100,
                        display: "flex",
                        justifyContent: "center"
                    }}></div>
                    <br />
                    <p className="text-center">ActionAid South Africa was established is a part of Action Aid International, an anti-poverty agency working with poor people in over 40 countries.</p>

                    <div className="the-reasons flex justiy-between">
                        <div className="pie" style={{ backgroundColor: "rgb(255 255 255 / 63%)", padding: 10, boxShadow: "1px 1px 1px #333333" }}>
                            <PieChart />
                        </div>
                        <div className="more-reasons">
                            <div className="why-container">
                                <h4>Contextual analysis</h4>
                                <p>Located on the southernmost tip of the African continent, South Africa spans a total area of 1,219,912 km². It is the 25th largest country in the world.</p>
                                <div className="read-more" style={{ background: "red", borderRadius: 5, textAlign: "center" }}>
                                    <span>Read More</span>
                                </div>
                            </div>
                            <div className="why-container">
                                <h4>South Africa and the World</h4>
                                <p>South Africa is a powerful country on the African continent, competing with Nigeria for the status of biggest economy. This creates both problems and opportunities.</p>
                                <div className="read-more" style={{ background: "red", borderRadius: 5, textAlign: "center" }}>
                                    <span>Read More</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="subs-parent-container" style={{ backgroundImage: `url(${SubscriptionBG})` }}>
            <div className="subscription">
                <h1>Subscribe Here</h1>
                <div className="red-border" style={{
                    border: "2px solid red",
                    width: 100,
                    display: "flex",
                    justifyContent: "center"
                }}></div>
                <br />
                <p className="text-center">
                    Add your name to stay up to date and find out how you can take action for women's rights around the world.
                </p>
                <div className="subs-form">
                    <div className="form-fields">
                        <fieldset className="form-group">
                            <input
                                placeholder="First Name"
                                type="text"
                                className="form-control"
                                name="FirstName" />
                        </fieldset>
                        <fieldset className="form-group">
                            <input
                                placeholder="Last Name"
                                type="text"
                                className="form-control"
                                name="LastName" />
                        </fieldset>
                        <fieldset className="form-group">
                            <input
                                placeholder="Email"
                                type="email"
                                className="form-control"
                                name="Email" />
                        </fieldset>
                        <fieldset className="form-group">
                            <input
                                placeholder="Phone Number"
                                type="tel"
                                className="form-control"
                                name="PhoneNumber" />
                        </fieldset>
                        <fieldset className="form-group">
                            <input
                                placeholder="ZIP / Postal Code"
                                type="text"
                                className="form-control"
                                name="ZIPPostalCode" />
                        </fieldset>
                        <fieldset className="form-group">
                            <select className="form-control" name="Country">
                                <optgroup>
                                    <option>Select Country</option>
                                    {CountriesList?.map((country: TCountry, index: number) => {
                                        return <option key={index} value={country?.name?.official}>{country?.name?.official}</option>
                                    })}
                                </optgroup>
                            </select>
                        </fieldset>
                        <div className="btn-subs">
                            <span>Subscribe</span>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    </>
}