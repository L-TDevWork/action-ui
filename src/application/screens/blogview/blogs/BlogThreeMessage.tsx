import type { JSX } from "react";

import BlogTwoPhoto from "../../../../assets/images/blogs/Image-generator-Young-Urban-Womens-Feminist-Economy-Manifesto-Campaign-Brief-150x150.png";

export const BlogThreeMessage: React.FC<{ Image?: boolean, Caption?: string }> = ({ Image, Caption }): JSX.Element => {
    return <div className="blog-message">
        <h4 className="font-bold">Introduction:</h4>
        <p>
            Women, particularly those who experience multiple forms of discrimination, bear a disproportionate amount of the burden in a world where economic systems frequently fail both people and the planet. ActionAid South Africa recognizes this and is gearing up for a transformative campaign, the Young Urban Women’s Feminist Economy Manifesto. This blog dives into the details of this groundbreaking initiative, its goals, and the urgent need for change.</p>

        <h4 className="font-bold">The Urgent Need for Change:</h4>
        <div className="flex second-paragraph">
            <p className="mr-2" style={{ width: "80%" }}>The existing economic and development models have perpetuated invisible boundaries, privatization, and the commodification of public goods, disproportionately affecting women. Rooted in patriarchy, racism, and colonialism, this paradigm intensifies power inequalities and contributes to a global democracy crisis. ActionAid South Africa’s Feminist Economy Manifesto aims to challenge the status quo and build progressive alternatives for economic justice.</p>
            <div className="image-area grid p-2">
                {Image && <img src={BlogTwoPhoto} />}
                <small className={`pt-2 ${Caption ? 'flex' : 'hidden'}`}>{Caption}</small>
            </div>
        </div>

        <h4 className="font-bold">The Manifesto’s Goals:</h4>
        <p>President Cyril Ramaphosa’s acknowledgment of the challenges faced by women in South Africa forms the backdrop for this campaign. With around half of all women in the country unemployed and earning less than men, there’s a pressing need to shift economic power into the hands of women. The Feminist Economy Manifesto sets out to achieve this by:</p>
        <ul style={{ margin: 20 }}>
            <li>Documenting the voices and experiences of young women affected by austerity policies and spending constraints.</li>
            <li>Building a shared understanding of the gendered impacts of economic policies and supporting feminist alternatives.</li>
            <li>Creating social and digital media content to highlight the role of international finance institutions, donors, and corporations.</li>
            <li>Encouraging young women to challenge and influence key institutions and governments to implement policies supporting alternative feminist economies.</li>
        </ul>
        <h4 className="font-bold">The Power of Collective Mobilization:</h4>
        <p>The manifesto’s strength lies in its ability to mobilise young women across diverse backgrounds to ensure that no one is left behind. The campaign aims to reflect the sentiments, worries, difficulties, and hopes of young women for South Africa’s economic future through the authenticity of their own voices.</p>
        <h4 className="font-bold">Target Audience and Key Messages:</h4>
        <p>The primary focus of the campaign is on Ministries of Finance, International Financial Institutions, Ministries of Women & Gender, the Commission of Gender Equity, and Women’s Economic Advocacy Groups. The key messages revolve around challenging austerity measures, promoting feminist economic alternatives, and advocating for gender-responsive policies.</p>
        <h4 className="font-bold">Campaign Platforms and Hashtags:</h4>
        <p>ActionAid South Africa is leveraging various platforms, including Facebook, Twitter, and LinkedIn, to amplify its message. The campaign invites everyone to join the conversation using hashtags like #FeministEconomyManifesto, #YoungWomenEconomies, and #NoAusterity.</p>
        <h4 className="font-bold">Timelines and Contacts:</h4>
        <p>The Feminist Economy Manifesto Campaign kicks off in September 2023, leading up to the 2023 Annual Meetings of the World Bank Group and International Monetary Fund. For more information, you can reach out to Zandile Motsoeneng and Kodwa Mpepho, the programme leads, or Sivu Siwisa, the Communications consultant, at <a href="mailto:supporters.za@actionaid.org">supporters.za@actionaid.org</a></p>
        <h4 className="font-bold">Conclusion:</h4>
        <p>ActionAid South Africa’s Young Urban Women’s Feminist Economy Manifesto is a beacon of hope in the pursuit of economic justice. By mobilising young women and challenging the existing economic paradigm, the campaign strives to create a future where women have equal opportunities and a say in shaping the economic landscape. Join the movement, use the hashtags, and let’s collectively work towards a more inclusive and equitable world.</p>
    </div>
}