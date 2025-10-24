import { useState, type JSX } from "react";

import ImageThree from "../../../assets/images/mining.png";
import ImageOne from "../../../assets/images/oursafety.png";
import ImageTwo from "../../../assets/images/i-define-me.png";
import ImageFour from "../../../assets/images/donor-money-spent.jpg";

import { RedBoarder } from "../../../infrastructure/shared/redborder/RedBoarder";

export const DonateScreen: React.FC<{}> = (): JSX.Element => {
    const [TabIndex, setTabIndex] = useState<number>(1);
    const [TabOptionIndex, setTabOptionIndex] = useState<number>(1);

    return <div className="screen-container for-donations">
        <div className="donate-overlay-bg">
            <div className="screen-content">
                <div className="form-area donations-form" style={{
                    backgroundColor: "#f5f5f5b3",
                    padding: 10,
                    width: "70%",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, 0%)"
                }}>
                    <br />
                    <h1 className="font-bold text-left p-4">Donate to Action Aid</h1>
                    <br />
                    <div className="w-9 fields-area-tabs flex justify-content-between">
                        <div style={{ boxShadow: "1px 1px 1px #333333" }} onClick={() => setTabIndex(1)} className={`monthly ${TabIndex == 1 && 'active'}`}>
                            <h6 className="font-bold">Monthly</h6>
                        </div>
                        <div style={{ boxShadow: "1px 1px 1px #333333" }} onClick={() => setTabIndex(2)} className={`once-off ${TabIndex == 2 && 'active'}`}>
                            <h6 className="font-bold">Once Off</h6>
                        </div>
                    </div>
                    <div className="w-9 fields-area-tabs-options flex justify-content-between">
                        <div style={{ boxShadow: "1px 1px 1px #333333" }} onClick={() => setTabOptionIndex(1)}
                            className={`p-2 font-bold ${TabOptionIndex == 1 && 'active'}`}>
                            <span>R500.00</span>
                        </div>
                        <div style={{ boxShadow: "1px 1px 1px #333333" }} onClick={() => setTabOptionIndex(2)}
                            className={`p-2 font-bold ${TabOptionIndex == 2 && 'active'}`}>
                            <span>R1000.00</span>
                        </div>
                        <div style={{ boxShadow: "1px 1px 1px #333333" }} onClick={() => setTabOptionIndex(3)}
                            className={`p-2 font-bold ${TabOptionIndex == 3 && 'active'}`}>
                            <span>R1500.00</span>
                        </div>
                        <div style={{ boxShadow: "1px 1px 1px #333333" }} onClick={() => setTabOptionIndex(4)}
                            className={`p-2 font-bold ${TabOptionIndex == 4 && 'active'}`}>
                            <span>Other</span>
                        </div>
                    </div>
                    <div className="w-9 messages-options grid">
                        {TabOptionIndex == 1 && <p className="m-2"><b>R500</b> Ensure 1 girls can attend after school program's on self -development</p>}
                        {TabOptionIndex == 2 && <p className="m-2"><b>R1000</b> provides training to 1 young mothers, living in poverty, to enhance their job seeking skills</p>}
                        {TabOptionIndex == 3 && <p className="m-2"><b>R1500</b> provides 5 households with 5 litres of clean water in mining water polluted areas</p>}
                        {TabOptionIndex == 4 && <p className="m-2"><b>Donate</b> Except This type of Amount. So Type which amount per month</p>}

                        {(TabOptionIndex == 4 && TabIndex == 2) && <fieldset className="form-group m-2">
                            <input
                                className="form-control"
                                placeholder="Enter amount"
                                name="Amount" />
                        </fieldset>}

                        <div className="payment-types flex w-4 justify-content-between m-2">
                            {TabIndex == 2 && <>
                                <div className="text-center" style={{ boxShadow: "1px 1px 1px #333333" }}>
                                    <span className="font-bold">Credit Card</span>
                                </div>
                                <div className="text-center" style={{ boxShadow: "1px 1px 1px #333333" }}>
                                    <span className="font-bold">Snapscan</span>
                                </div>
                            </>}
                            {TabIndex == 1 && <div className="text-center" style={{ boxShadow: "1px 1px 1px #333333" }}>
                                <span className="font-bold">Direct Debit</span>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="if-you-donate">
            <div className="what-happens">
                <h1 className="font-bold">
                    If you give a monthly donation…
                </h1>
                <small>A regular gift from you could help change the lives of womxn and girls</small>
            </div>
        </div>

        <div className="reasons-for-donations">
            <div className="reasons-content" style={{ width: "80%", margin: "0 auto" }}>
                <div className="our-programs-areas">
                    <br />
                    <div className="area-programs flex justify-content-center">
                        <div className="program" style={{ backgroundImage: `url(${ImageOne})` }}>
                            <div className="program-summary">
                                <h4 className="font-bold">Advance Climate Justice and Resilience</h4>
                                <p>R150 Ensure 2 girls can attend after school program’s on self-development</p>
                            </div>
                        </div>

                        <div className="program" style={{ backgroundImage: `url(${ImageTwo})` }}>
                            <div className="program-summary">
                                <h4 className="font-bold">Promote Women’s Rights and Gender Equality</h4>
                                <p>R300 provides training to 3 young mothers, living in poverty, to enhance their job seeking skills</p>
                            </div>
                        </div>

                        <div className="program" style={{ backgroundImage: `url(${ImageThree})` }}>
                            <div className="program-summary">
                                <h4 className="font-bold">Champion Youth Leadership and Economic ...</h4>
                                <p>R600 provides 10 households with 5 litres of clean water in mining water polluted areas</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        </div>

        <div className="what-organisation-does screen-container">
            <div className="organisation-does screen-content">
                <br />
                <h1 className="font-bold">What Actionaid Does</h1>
                <RedBoarder />
                <div className="flex justify-content-between">
                    <div className="m-4">
                        <p>ActionAid is an international charity that works with womxn and girls living in poverty. The denial of their rights is one of the biggest causes of poverty worldwide, and a grave injustice. That’s why we put the rights of womxn and girls at the heart of all we do.</p>
                        <p>Our dedicated local staff are helping end violence against womxn and girls and changing lives, for good. We won’t stop until womxn and girls are out of danger, out of poverty and on track to create the future they want.</p>
                        <p>We focus on womxn and girls. Because when they unlock their potential and claim their rights, they can change the course of their lives, and the lives of their families, forever.</p>

                        <ul className="m-4">
                            <li>We partner with womxn, giving them the tools and skills to help themselves, and fight what holds them back.</li>
                            <li>Through our long-standing child sponsorship programme, we give children and their communities better prospects for the future.</li>
                            <li>We work directly with and through local people, gaining unparalleled insight into what works.</li>
                        </ul>
                    </div>
                    <div className="m-4">
                        <img src={ImageFour} alt="doney-money-spent" />
                    </div>
                </div>
            </div>
        </div>
    </div>
}