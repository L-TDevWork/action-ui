import type { JSX } from "react";

export const Genocide: React.FC<{ Image?: boolean, Caption?: string }> = (): JSX.Element => {
    const isMobileView = () => {
        return window.matchMedia("(max-width: 1024px)").matches; // Adjust max-width as needed for your definition of "mobile"
    }

    return <div className="blog-message">
        <br />  <br />
        <h4 className="font-bold">ACTIONAID SOUTH AFRICA</h4>
        <p>ActionAid South Africa (AASA) is a nationally registered civil society
            organisation and a part of the ActionAid International Federation, a global
            social justice federation working in 45 countries around the world.AASA works
            with people living in poverty and exclusion to build sustainable, people-centred
            and just alternatives to injustice and inequality. Guided by Feminist Analysis and a
            Human Rights-Based Approach (HRBA), we see the interconnections between people’s
            struggles for social transformation.We ally ourselves primarily with the youth, grass-roots communities, like-minded organisations and
            social movements to develop initiatives and campaigns that address the systemic drivers of poverty, injustice and inequality in South
            Africa.</p>
        <br />
        <div className="grid" style={{ border: "2px solid red", padding: 10 }}>
            <h4 className="font-bold">
                1. BACKGROUND AND CONTEXT
            </h4>
            <p>Since October 2023, the Gaza in Palestine has faced unprecedented military violation, resulting in an unimaginable humanitarian
                crisis.The extensive killing of Palestinians to date 59,220 Palestinians, mainly women and children being victims of a bloodthirsty
                apartheid regime. Civilian infrastructure such as hospitals, schools, churches and mosques have been targeted and destroyed.</p>
            <p>“We have been watching a live-streamed genocide for nearly two years. International humanitarian agencies have been blocked
                from delivering aid, people are starving, hospitals are struggling to function, pregnant women can’t give birth safely, tens of
                thousands of children have been killed”- Jamil Sawalmeh, Country Director of ActionAid Palestine’.</p>
            <p>Despite global condemnation and pressure from the South Africa’s ICJ case that set out in a legally sound manner the conduct of
                Iseral and its genocidal intent. Despite this, the violence and violations of international law still continues.The crime of genocide
                can no-longer be acceptable morally and politically.We invite civil society, faith based organizations, human right defenders and
                ordinary citizens to stand up against the genocide.</p>
        </div>
        <br />
        <div className={`justify-content-between ${isMobileView() ? 'grid' : 'flex'}`}>
            <div className="m-2 text-white" style={{ backgroundColor: "red", padding: 10 }}>
                <h6 className="font-bold">2. ACTIONAID INTERNATIONAL</h6>
                <p>Since October 2023, and despite
                    unprecedented challenges,
                    ActonAid and our partners have
                    reached more than 457,000 people
                    (and counting) in Gaza and the
                    West Bank, with essential services
                    that include: food and shelter
                    support, access to WASH facilities,
                    multipurpose cash assistance, and
                    the creation of safe spaces.</p>
            </div>
            <br />
            <div className="m-2 text-white" style={{ backgroundColor: "red", padding: 10 }}>
                <h6 className="font-bold">3. PURPOSE OFTHE DEMONSTRATION</h6>
                <p>We aim to amplify Palestinian voices, uphold their right to self-
                    determination and dignity, raise awareness of South Africa’s ICJ

                    case and significance. We demand a permanent ceasefire and
                    an immediate end to hostilities, supported by the United State.
                    We call for unrestricted humanitarian access, and denounce the
                    use of starvation and violence, including the recent UN Security
                    Council declaration of famine in Gaza as a “man made crisis”
                    imposed by Isreal. The mounting deaths of civilians seeking aid,
                    and Israeli strikes on hospitals and displacement zones. We
                    condemn attacks on civilians.</p>
            </div>
            <br />
            <div className="m-2 text-white" style={{ backgroundColor: "red", padding: 10 }}>
                <h6 className="font-bold">4. OBJECTIVES</h6>
                <p>·Mobilize grassroot
                    based public
                    participation across
                    communities, sectors,
                    and faiths.
                    ·Build sustained
                    networks for Palestinian
                    solidarity beyond the
                    event.
                    ·Engage artists, poets,
                    students, and activists in
                    solidarity actions.</p>
            </div>

        </div>
        <br />
        <h4 className="font-bold">5. CALLTO ACTION</h4>
        <p>We invite all people of conscience to stand with the people of Gaza.This is not just a demonstration, it is a collective moral declaration
            against war, oppression, and impunity. Join us in calling for an end to the suffering and a future rooted in justice and peace for all.</p>

        <div className="flex" style={{ border: "2px solid red", padding: 10, borderRadius: 10 }}>
            <div className="grid" style={{ width: "30%", padding: 10 }}>
                <h6 className="font-bold">
                    Friday<br />
                    October 10, 2025
                </h6>
            </div>
            <div className="grid" style={{ borderLeft: "2px solid red", width: "30%", padding: 10 }}>
                <h6 className="font-bold">
                    10:00am -<br />
                    13:00pm
                </h6>
            </div>
            <div className="grid" style={{ borderLeft: "2px solid red", width: "30%", padding: 10 }}>
                <h6 className="font-bold">
                    📍George Lea Park, Sandton
                </h6>
            </div>
        </div>
    </div>

}