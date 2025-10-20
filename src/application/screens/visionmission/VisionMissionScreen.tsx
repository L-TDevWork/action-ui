import type { JSX } from "react";
import { RedBoarder } from "../../../infrastructure/shared/redborder/RedBoarder";

import VisionImage from "../../../assets/images/vision.png";
import { GetIcon } from "../../../infrastructure/shared/icons/GetIcon";

export const VisionMissionScreen: React.FC<{}> = (): JSX.Element => {
    return <div className="screen-container vision-mission">
        <div className="screen-content">
            <h1>Vision Mission</h1>
            <RedBoarder />

            <div className="upper-content flex">
                <div className="left-area">
                    <div className="vision-area">
                        <h4 className="font-bold">Vision</h4>
                        <p>ActionAid South Africa (AASA) has a clear <b>vision</b> of realising <b>social justice</b> through supporting the
                            <b>actions</b> and <b>power of people</b> whose lives are most affected by inequality, injustice and oppression.
                            And so, we commit to supporting social movements of the poor, excluded and marginalised,
                            prioritising our support for womxn-led feminist movements.</p>

                        <p>
                            In a post-apartheid South Africa, we have seen some successes in realising individual rights,
                            but collective <b>rights’ realisation</b> of people living in poverty and marginalisation, has been limited.
                            To AASA, <b>structural change</b> is required to realise <b>social justice</b>.
                        </p>
                    </div>
                    <div className="mission-area">
                        <h4 className="font-bold">Mission</h4>
                        <p>To Work With Poor And Excluded People To Eradicate Poverty And Injustice. To eradicate poverty and injustice by working with people living in poverty and exclusion, civil society organisations, activists and movements wherever they are.</p>
                    </div>
                </div>
                <div className="right-area">
                    <img src={VisionImage} alt="vision" />
                </div>
            </div>
            <div className="lower-content">
                <h4 className="font-bold">Organisational Values</h4>
                <ul>
                    <li><GetIcon iconName="bi bi-circle-fill" />&nbsp;&nbsp;<span className="font-bold text-red-800">Feminist 2:</span> AASA aims to create a society in which individuals’ genders don’t restrict them from an equitable access to rights and resources.</li>
                    <li><GetIcon iconName="bi bi-circle-fill" />&nbsp;&nbsp;<span className="font-bold text-red-800">Mutual Respect:</span> requiring us to recognise the innate worth of all people and the value of diversity.</li>
                    <li><GetIcon iconName="bi bi-circle-fill" />&nbsp;&nbsp;<span className="font-bold text-red-800">Equity and Justice:</span> ensuring equal opportunity to everyone, irrespective of race, age, gender, sexual orientation, HIV status, colour, class, ethnicity, disability, location and religion.</li>
                    <li><GetIcon iconName="bi bi-circle-fill" />&nbsp;&nbsp;<span className="font-bold text-red-800">Integrity:</span> requiring us to be honest, transparent and accountable at all levels for the effectiveness of our actions and open in our judgements and communication with others.</li>
                    <li><GetIcon iconName="bi bi-circle-fill" />&nbsp;&nbsp;<span className="font-bold text-red-800">Solidarity:</span> with people living in poverty and exclusion will be the only bias in our commitment to the fight against poverty.</li>
                    <li><GetIcon iconName="bi bi-circle-fill" />&nbsp;&nbsp;<span className="font-bold text-red-800">Courage of Conviction:</span> requiring us to be creative and radical, bold and innovative – without fear of failure – in pursuit of making the greatest possible impact on the causes of poverty and injustice.</li>
                    <li><GetIcon iconName="bi bi-circle-fill" />&nbsp;&nbsp;<span className="font-bold text-red-800">Independence:</span> from any religious and party-political affiliation.</li>
                    <li><GetIcon iconName="bi bi-circle-fill" />&nbsp;&nbsp;<span className="font-bold text-red-800">Humility:</span> in our presentation and behaviour, recognising that we are part of a wider alliance against poverty and inequality.</li>
                </ul>
            </div>
        </div>
    </div>
}