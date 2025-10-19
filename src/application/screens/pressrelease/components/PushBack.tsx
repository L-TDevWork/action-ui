import type { JSX } from "react";

import PushBackPhoto from "../../../../assets/images/blogs/activists-push-back-and-shift-power.jpg";

export const PushBack: React.FC<{ Image?: boolean, Caption?: string }> = ({ Image, Caption }): JSX.Element => {
    return <div className="blog-message">
        <h4 className="font-bold">Introduction:</h4>
        <p>
            Despite having one of the most progressive legal frameworks in the world, as well as South Africa being a leader on sexuality and gender identity rights across the globe, not one year passes in South Africa without hate crimes being perpetrated against Lesbian, Gay, Bisexual, Transgender, Intersex, Asexual and Queer (LGBTIAQ) people. In 2016, at least four people were murdered because of their sexuality and gender identity, and many are victims of discrimination and violent hate crimes</p>
        <p>Unfortunately due to entrenched prejudiced and patriarchal views within the public sector and among those tasked to ensure security and justice, these cases often see no justice. Furthermore people who do report these crimes face secondary victimisation and discrimination, while duty bearers drag their feet and fail to uphold the rights of survivors.</p>
        <div className="flex second-paragraph">
            <p>Working with ActionAid South Africa, the Forum for Empowerment of womxn (FEW), trained members of the Rainbow Activist Alliance (RAA)— a social movement of black lesbian womxn in Gauteng— in how to monitor court proceedings and how to ensure survivors’ and victims’ rights are upheld. Between October 2014 and July 2015, members of RAA and FEW travelled to Pretoria Magistrate’s Court to monitor proceedings and to demand justice for Thembelihle Sokhela at the trial of Thabo Molefe, accused of raping and murdering Thembelihle in September 2014.</p>
            <div className="image-area grid p-2">
                {Image && <img src={PushBackPhoto} />}
                <small className={`pt-2 ${Caption ? 'flex' : 'hidden'}`}>{Caption}</small>
            </div>
        </div>
        <p>The powerful presence of the RAA and FEW at the court case, and the pressure they put on the judiciary, helped ensure that on 30 July 2015, the court found Thabo Molefe guilty and sentenced him to a 22 years in prison for murder and 12 years for rape. Here, collective action meant the womxn were able to hold duty bearers to account when laws and policies exist but are seldom implemented. To this day RAA and Few continue to monitor hate crime cases to ensure the public sector officials implement legislation in a fair and non-discriminatory manner so that perpetrators feel the full might of South African law.</p>
    </div>
}