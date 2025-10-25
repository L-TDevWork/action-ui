import type { JSX } from "react";

import { RedBoarder } from "../../../infrastructure/shared/redborder/RedBoarder";
import ImageOne from "../../../assets/images/blogs/Group-photo-day-2-YUW2024-400x250.jpeg";

export const ContextualAnalysis: React.FC<{}> = (): JSX.Element => {
    return <div className="screen-container">
        <div className="screen-content for-read-mores">
            <h1 className="font-bold">Contextual Analysis</h1>
            <RedBoarder />
            <div className="mt-4">
                <img src={ImageOne} alt="analysis" />
            </div>
            <div className="mt-2">
                <p>Located on the southernmost tip of the African continent, South Africa spans a total area of 1,219,912 km². It is the 25th largest country in the world, with one of the biggest and most sophisticated economies in Africa. The total population grew from 51 770 560 in 2011 to 55 653 654 in 2016, 51% being womxn. The youth (ages 15 – 34) form 36% of the total population</p>
                <p>Despite being classified as a middle income country, it is estimated that 26% of the population is unemployed and seven million people go to bed hungry every night. In the last five-years, South Africa has been classified as the most unequal country in the world in income terms. While South Africa is heralded for its progressive constitution and legislative framework, the rights of many citizens are regularly violated and remain unrealised. This, in part, is attributed to a deepening of the historical structural inequalities under apartheid and entrenched within the context of a neo-liberal economic system. The period has also seen a weakening of organised civil society and a lack of sustainable social movements</p>
            </div>
        </div>
    </div>
}