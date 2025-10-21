import type { JSX } from "react";
import { RedBoarder } from "../../../infrastructure/shared/redborder/RedBoarder";

import LocationMap from "../../../assets/images/location-map.jpg";

export const WhereWeWorkScreen: React.FC<{}> = (): JSX.Element => {
    return <div className="screen-container">
        <div className="screen-content">
            <h1>Where We Work</h1>
            <RedBoarder />

            <div className="about-where-we-work">
                <p>AASA has a footprint in both urban and rural locations in six provinces across the country. Historically AASA’s focus has been on rural development with seven existing rural local rights programmes (LRPs) in which we have been working for many years. Rural poverty remains a key focus of our work, with a commitment to deepen the impact of our programmes and show real change in the lives of communities. At the same time however, we recognise that South Africa has an increasingly urbanised population, with some 60% of the population now living in cities and towns. Over the past years, AASA has increased its work in urban areas, and will continue to focus on urban spaces between 2017 and 2021, with a commitment to setting up new urban LRPs over this strategic period.</p>
            </div>
            <div className="image-locations flex justify-content-center w-full">
                <img src={LocationMap} alt="locations" style={{ width: "50%" }} />
            </div>
            <h4 className="font-bold">Who We work With</h4>
            <p>We work with local and national allies to support people living in poverty, particularly womxn, the youth and children to claim their human rights.
                <br /><br />
                People living in poverty are not only those below a certain income level, we also recognise the poverty of rights, dignity, access and power. We prioritise working with marginalised people facing discrimination and dispossessed by disaster, violence and inequality
                <br /><br />
                We partner with grass-roots organisations and social movements located in the communities we work in. We also strategically partner with research institutions and civil society alliances and coalitions.
                <br /><br />
                AASA recognises the limitations of NGOs to affect long term change, and believe that the only vehicle for transformative, sustainable and structural change is through the actions of people who are directly affected.</p>
        </div>
    </div>
}