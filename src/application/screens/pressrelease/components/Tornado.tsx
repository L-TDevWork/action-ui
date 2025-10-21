import type { JSX } from "react";

import ImageFive from "../../../../assets/images/blogs/WhatsApp-Image-2024-07-15-at-13.07.58-980x735.jpeg";
import ImageOne from "../../../../assets/images/blogs/WhatsApp-Image-2024-07-15-at-11.24.36-1-980x735.jpeg";
import ImageTwo from "../../../../assets/images/blogs/WhatsApp-Image-2024-07-15-at-11.24.36-2-980x735.jpeg";
import ImageFour from "../../../../assets/images/blogs/WhatsApp-Image-2024-07-15-at-13.07.59-1-980x735.jpeg";
import ImageThree from "../../../../assets/images/blogs/WhatsApp-Image-2024-07-15-at-11.24.38-1-980x735.jpeg";

export const Tornado: React.FC<{ Image?: boolean, Caption?: string }> = (): JSX.Element => {
    return <div className="blog-message">
        <br />
        <h4 className="font-bold">For Immediate Release</h4>
        <br />
        <h4 className="font-bold">ActionAid, in Partnership with City Hope, Provides Critical Support to Tornado-Stricken Magwaveni Community</h4>
        <br />
        <p>On the 3rd of June 2024, the community of Magwaveni in oThongati was devastated by a powerful tornado, leaving many residents distraught and stranded. The natural disaster caused extensive damage, with some homes completely demolished and others left in disrepair. In the immediate aftermath, many community members sought refuge with neighbours or in a communal tent at a nearby soccer ground.</p>
        <p>Since the disaster, the resilience of the Magwaveni community has been supported by various organizations and Good Samaritans who have provided essentials such as food and toiletries. In line with our commitment to justice and community support, ActionAid has partnered with City Hope to assist those affected.</p>
        <h4 className="font-bold">Our Efforts Include:</h4>
        <ol>
            <li>Provision of R 6,000 Vouchers: These vouchers have been distributed to help families purchase necessary supplies.</li>
            <li>Collaboration with MICA: Through this partnership, building materials have been supplied to aid in the reconstruction of damaged homes.</li>
            <li>Emotional and Mental Health Support: Recognizing the trauma experienced by the community, we have launched a comprehensive mental health support program. This initiative includes Gender-Based Violence (GBV) training, disaster management training, and women empowerment sessions. Focus groups are also open to men in the community, ensuring inclusive support for all.</li>
        </ol>
        <p>Lungile Zondi, a community member from Magwaveni, shared her experience: “To this day, I’m still shaken by the sound of a teaspoon stirring in a cup of tea because it reminds me of that tragedy.”</p>
        <p>This project is ongoing, reflecting the substantial support the community still requires. We welcome and deeply appreciate any additional assistance.</p>
        <p>For Further Information and Enquiries: Contact: Mr Mano Wilson Phone: +27 63 896 5902 Email: <a href="mailto:Manoharan.wilson@actionaid.org">Manoharan.wilson@actionaid.org</a></p>
        <div className="flex flex-wrap">
            <img style={{ width: "30%", margin: 10 }} src={ImageOne} alt="imageOne" />
            <img style={{ width: "30%", margin: 10 }} src={ImageTwo} alt="imageTwo" />
            <img style={{ width: "30%", margin: 10 }} src={ImageThree} alt="imageThree" />
            <img style={{ width: "30%", margin: 10 }} src={ImageFour} alt="imageFour" />
            <img style={{ width: "30%", margin: 10 }} src={ImageFive} alt="imageFive" />
        </div>
    </div>
}