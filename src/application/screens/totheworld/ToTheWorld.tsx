import type { JSX } from "react";

import ImageOne from "../../../assets/images/blogs/location-map.jpg";
import { RedBoarder } from "../../../infrastructure/shared/redborder/RedBoarder";

export const ToTheWorld: React.FC<{}> = (): JSX.Element => {
    return <div className="screen-container">
        <div className="screen-content for-read-mores">
            <h1 className="font-bold">South Africa and the world</h1>
            <RedBoarder />
            <div className="mt-4">
                <img src={ImageOne} alt="analysis" />
            </div>
            <div className="mt-2">
                <p>South Africa is a powerful country on the African continent, competing with Nigeria for the status of biggest economy. This creates both problems and opportunities. One key problem is that South Africa acts as a hegemon on the continent, particularly in Southern Africa where South African companies are active and often act in very problematic ways including causing environmental damage and being guilty of treating workers in ways they would never get away with in South Africa. On the other hand, South Africa has the power to use its influence in the region to broaden the impact of its internal commitment to human rights and freedoms. South Africa is the only African country to be a member of BRICS and of the G20, this is a great responsibility as both these groupings are extremely influential players in the global system, and though unelected by our neighbours, South Africa nonetheless plays the role of representing the interests of the continent at these forums.</p>
                <p>South Africa’s history of engagement with international spaces such as the United Nations has been patchy, with some great examples of leadership on issues of rights and justice but also many cases of near incomprehensible positions and votes at key moments. For instance in 2016, the South Africa delegation abstaining from a vote on the UN’s Special Rapporteur on hate crimes based on sexuality and gender. The recent decision to withdraw from the International Criminal Court without any form of consultation or consensus building is another troubling example. Thus, there is a lack of accountability between the Department of International Relations and Cooperation and civil society, which often leads to tension and uncertainty. This however represents an opportunity for AASA to play a convening role in developing this connection and building an alternative accountability between government departments and civil society</p>
            </div>
        </div>
    </div>
}