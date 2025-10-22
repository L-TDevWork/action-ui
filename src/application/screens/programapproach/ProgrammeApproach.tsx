import type { JSX } from "react";
import { RedBoarder } from "../../../infrastructure/shared/redborder/RedBoarder";

export const ProgrammeApproach: React.FC<{}> = (): JSX.Element => {
    return <div className="screen-container">
        <div className="screen-content">
            <h1>Our Programme Approach</h1>
            <RedBoarder />

            <div className="actual-approach w-9 flex justify-content-center text-center">
                <p>AASA’s programme approach is grounded in the Human Rights Based Approach (HRBA) which is the core of ActionAid’s methodology for transformative change. Within this we have a commitment to the pillars of HRBA: empowerment, solidarity and campaigning. Although our understanding of what constitutes quality programming goes beyond these pillars, the following elements are visible in all our programming:</p>
            </div>

            <div className="emp-sol flex justify-content-between pt-4">
                <div className="emp m-2 p-2">
                    <h4 className="font-bold">Empowerment</h4>
                    <p>Key to ActionAid’s approach is the act of placing people at the centre of their own struggles. This requires an investment in and patience with the process of developing self-confidence; political and strategic leadership; and capacity. All programmatic work needs to create spaces specifically for empowerment work as well as ensuring that all work implementation takes place in a participatory way ensuring that empowerment is used as a powerful goal in and of itself, and not merely as a means to other ends.</p>
                </div>
                <div className="sol m-2 p-2">
                    <h4 className="font-bold">Solidarity</h4>
                    <p>Grassroots movements and networks have the power to bring about resilient and transformative change in the communities in which they are located. However, amplifying this change requires us to build solidarity between those movements and networks at local, national and international levels. At a local level for example this may mean encouraging LGBTIQ groups to join workers struggles or vice versa. At the national and international level, it may mean developing spaces for sharing and learning between people waging the same struggles in different parts of the world.</p>
                </div>
            </div>
            <br />
            <div className="m-4">
                <h4 className="font-bold">Campaigning</h4>
                <p>
                    AASA will seek to fight inequality, injustice and poverty by encouraging people-driven and people-cantered campaigns rooted in the communities we work, as well as by helping to connect people’s struggles nationally, regionally and internationally to achieve social justice and equality.
                    <br /><br />
                    AASA will not only contribute to ActionAid International campaigns, but also build national level campaigns and support partners and LRPs to develop campaigns at the local level. In doing so, AASA aims to ensure that the intersections of all programmatic areas are brought to the forefront of campaign strategies so that the individual objectives of our programmatic areas find synergy both across programmes and at the local, national and global levels.
                    <br /><br />
                    As part of our commitment to HRBA, our campaigns will ensure that both solidarity and empowerment are embedded in all campaign strategies. As such, we will act in solidarity with emerging movements and help empower communities, self-mobilised groups, social movements, staff and volunteers to build powerful and impactful campaigns that are driven and sustained by collective actions and people power.
                </p>
                <h4 className="font-bold">Research</h4>
                <p>All AASA programmes should include a focus on research— not only to support the specific programmes, but to also make a contribution to the broader knowledge base on areas that we have expertise on. Together with our unique research signature which focusses on participatory and empowering research processes, our research helps build stronger campaigns, and builds credibility within the sector and amongst the people we work and engage with.</p>
                <div className="p-4" style={{ boxShadow: "0 1px 0px #cccccc" }}></div>
                <br />
                <h4 className="font-bold">Integration</h4>
                <p>AASA works on a variety of issues at multiple levels, thus creating linkages between all our work is a priority. One facet is the mainstreaming of women’s rights and youth interests throughout all of our work. A second is building solidarity between issues and geographic areas. A third is to demonstrate clear coherence between the work taking place at local, national and international levels. This does not mean that the work is identical, since strategies and priorities may differ between programme areas, but instead means that there is a common thread to the work at all levels. This is to ensure we avoid a situation in which the LRPs and national programmes are implementing two distinct work streams. In addition, it is vital that Child Sponsorship, where applicable, and programmes implementation are integrated to the extent that the face of the child can clearly be seen in our work, and that children together their families can clearly articulate the impact of ActionAid interventions on their lives.</p>
                <div className="p-4" style={{ boxShadow: "0 1px 0px #cccccc" }}></div>
                <br />
                <h4 className="font-bold">Politicisation of staff</h4>
                <p>Coherence between what we demand in the world and what we practice in our own lives is important to the way in which AASA wants to work. It is critical then that the programme units invest in inward looking projects that support the political development of staff and partners. For example, our feminist education programme that has been present for some years needs to be further institutionalised in the next strategic period. Using spaces like the morning buzz, critical society sessions and dedicated training weeks, we will ask each unit to develop staff capacity on our work and the values and politics that guide it.</p>

            </div>
        </div>
    </div>
}