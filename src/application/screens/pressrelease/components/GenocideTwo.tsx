import type { JSX } from "react";

export const GenocideTwo: React.FC<{ Image?: boolean, Caption?: string }> = (): JSX.Element => {
    return <div className="blog-message">
        <h4 className="font-bold">03 September 2025 - Immediate Release</h4>
        <br />
        <h6 className="font-bold">Standing Against Genocide: Solidarity with Palestine</h6>
        <p>Action Aid South Africa announces national demonstration calling for permanent ceasefire,
            unrestricted humanitarian access and accountability.</p>

        <p><b>Johannesburg, South Africa</b> – Action Aid South Africa (AASA), will lead a peaceful public
            demonstration in solidarity with the people of Palestine on Friday, 10 October 2025, from
            10:00 -13:00, from George Lea Park, Sandton, to the US Consulate in Sandton.</p>
        <p>The demonstration takes place against the backdrop of an escalating humanitarian crises,
            persistent violations of international law, and global calls for justice, underscoring the
            urgent need for civil society, faith-based organizations, human rights defenders, and all
            people of conscience to act.</p>
        <p>Since October 2023, Gaza has endured unprecedented military violations and a deepening
            humanitarian catastrophe. To date, an estimated 59,220 Palestinians have been killed, the
            majority women and children, as civilian infrastructure—hospitals, schools, churches, and
            mosques—has been repeatedly targeted and destroyed.</p>
        <div className="italicised" style={{ margin: 20 }}>
            <p><i>“We have been watching a live-streamed genocide for nearly two years. International
                humanitarian agencies have been blocked from delivering aid, people are starving,
                hospitals are struggling to function, pregnant women can’t give birth safely, tens of
                thousands of children have been killed,”</i> said <b>Jamil Sawalmeh, Country Director of
                    ActionAid Palestine</b>.</p>
        </div>
        <p>ActionAid and partners have reached more than 457,000 people in Gaza and the West Bank
            with essential services, including food and shelter support, access to WASH facilities,
            multipurpose cash assistance, and the creation of safe spaces—despite extraordinary
            barriers on the ground.</p>
        <p>The public demonstration brings together civil society, faith leaders, artists, and students in
            a peaceful show of solidarity. Participants will call for a permanent ceasefire, secure
            unrestricted humanitarian access, and spotlight South Africa’s case at the International
            Court of Justice as part of a broader demand for global accountability for atrocity crimes.</p>
        <h4 className="font-bold">Call to Action</h4>
        <p>Our message is clear: stop the genocide. We invite all people of conscience to stand with
            the people of Gaza and to call for an end to the suffering and a future rooted in justice and
            peace for all.</p>
        <h4 className="font-bold">ENDS</h4>

        <div style={{ borderBottom: "1px solid black", margin: 20 }}></div>
        <h4 className="font-bold">Notes to editors:</h4>
        <p>Peaceful assembly and adherence to marshal instructions are required.</p>
        <p>Participants are encouraged to use the following hashtags: #CeasefireNow
            #StandWithPalestine #LetAidIn #ActionAidSA</p>
        <p>For media enquiries reach out to <a href="mailto:Mathapelo.Makhubu@actionaid.org">Mathapelo.Makhubu@actionaid.org</a></p>
        <h4 className="font-bold">About ActionAid South Africa</h4>
        <p>Guided by feminist analysis and a human rights-based approach, ActionAid South Africa
            works with youth, grassroots communities, partner organisations, and social movements
            to challenge systemic poverty, injustice, and inequality. As part of a global federation active
            in 45 countries, ActionAid stands with communities resisting oppression and demanding
            dignity.</p>
    </div>

}