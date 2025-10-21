import type { JSX } from "react";

import BloneOnePhoto from "../../../../assets/images/blogs/Mining-Camp-Photo-1-980x653.jpeg";

export const BlogOneMessage: React.FC<{ Image?: boolean, Caption?: string }> = ({ Image, Caption }): JSX.Element => {
    return <div className="blog-message">
        <p>ActionAid’s involvement in GBV Training in Mining-Affected Communities aligns with its commitment to social justice, gender equity, and empowering marginalized groups. Gender-Based Violence (GBV) often intensifies in mining areas due to socio-economic disruptions, power imbalances, and the influx of transient workforces. ActionAid has conducted trainings in Mpumalanga, Limpopo, KwaZulu-Natal, and Gauteng. This was then followed by the GBV National camp and later joined Women Affected By Mining United in Action which launched their evidence-based research report launch titled “Beneath the surface. Women’s struggles and resistance to violence in mining-affected areas“. The trainings aim to address these issues through awareness, prevention, and response mechanisms.   GBV Training in Mining-Affected Communities aimed at:
        </p>
        <div className="image-area grid p-2">
            {Image && <img src={BloneOnePhoto} />}
            <small className="pt-2">{Caption}</small>
        </div>
        <h4 className="font-bold">Raise Awareness of GBV</h4>
        <ol>
            <li> Educate communities about the forms, causes, and impacts of GBV, particularly in mining contexts.</li>
            <li>Highlight the link between mining activities, increased vulnerabilities, and GBV risks (e.g., economic dependency, displacement, and exploitation).
            </li>
            <li>   </li>
        </ol>
        <h4 className="font-bold">Empower Women and Vulnerable Groups</h4>
        <ol>
            <li> Equip women and marginalized groups with knowledge about their rights and mechanisms to report and address GBV.</li>
            <li> Build confidence and leadership skills to enable them to participate in community decision-making processes.</li>
        </ol>

        <h4 className="font-bold">Enhance Community-Based Responses</h4>

        <ol>
            <li>  Train community members to identify and intervene in GBV cases using trauma-sensitive approaches.</li>
            <li> Establish or strengthen community support structures, such as GBV survivor networks or local committees.</li>
        </ol>
        <h4 className="font-bold">Engage Key Stakeholders</h4>

        <ol>
            <li> Work with traditional leaders, government officials, and mining companies to address systemic factors contributing to GBV.</li>
            <li>  Advocate for company-level policies to prevent GBV and support survivors in mining areas.</li>
        </ol>
        <h4 className="font-bold">Promote Policy Change</h4>


        <ol>
            <li> Advocate for policies that link mining licenses to companies’ adherence to gender-sensitive practices.</li>
            <li>  Push for government enforcement of laws protecting women and other vulnerable groups in mining areas.</li>
        </ol>

        <p>Key Components of the Training Program:</p>

        <h4 className="font-bold"> Workshops and Educational Sessions:</h4>

        <ol>
            <li> Interactive training on identifying and addressing GBV.</li>
            <li>   Discussions on women’s rights, South African legal frameworks (e.g., Domestic Violence Act, Sexual Offenses Act), and reporting mechanisms.</li>
        </ol>

        <h4 className="font-bold">  Capacity Building:</h4>
        <ol>
            <li>  Train local activists and leaders as GBV champions who can lead interventions in their communities.</li>
            <li>  Provide legal and psychological first-aid training to equip local advocates with tools to support survivors.</li>
        </ol>

        <h4 className="font-bold">
            Community Engagement:
        </h4>
        <ol>
            <li> Host community dialogues to destigmatize GBV and encourage collective action.</li>
            <li>  Use participatory approaches like theatre for development or community storytelling to foster understanding.</li>
        </ol>

        <h4 className="font-bold">Multi-Sector Collaboration:</h4>
        <ol>
            <li> Partner with local NGOs, legal aid organizations, and health services to establish referral pathways for survivors.
            </li>
            <li> Engage mining companies in discussions about their role in mitigating GBV.</li>
        </ol>

        <h4 className="font-bold"> Monitoring and Evaluation:</h4>
        <ol>
            <li> Track the program’s impact through community feedback and data collection on GBV incidents and responses.</li>
            <li>Adjust strategies based on lessons learned and emerging trends.</li>
            <li> Accountability and justice are values that we hold highly, which is why we will continue to work with communities and relevant stakeholders.
            </li>
        </ol>

        <p> Accountability and justice are values that we hold highly, which is why we will continue to work with communities and relevant stakeholders. It must be noted that the depth of GBV demands all hands on deck, beneath the ground and above the ground.</p>
    </div>
}