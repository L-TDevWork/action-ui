import { useState, type JSX } from "react";
import { Tornado } from "../pressrelease/components/Tornado";
import { PushBack } from "../pressrelease/components/PushBack";
import { useAppContext } from "../../../core/context/AppContext";
import { FemaleGBV } from "../pressrelease/components/FemaleGBV";
import { GirlsClub } from "../pressrelease/components/GirlsClub";
import { Xenophobia } from "../pressrelease/components/Xenophobia";
import { CourtsOfYoung } from "../pressrelease/components/CourtsOfYoung";
import { DefineMePress } from "../pressrelease/components/DefineMePress";
import { ToThePresident } from "../pressrelease/components/ToThePresident";
import { CourtsOfYoungRelease } from "../pressrelease/components/CourtsOfYoungRelease";
import { DonationsPannel } from "../../../infrastructure/shared/donationpannel/DonationsPannel";

export const PublicationViewScreen: React.FC<{}> = (): JSX.Element => {
    const { ActiveBlog } = useAppContext();

    const [PannelStatus, setPannelStatus] = useState<boolean>(false);

    return <div className="publications-views" style={{ paddingTop: "5%" }}>
        <div className="publication-article">
            <div onClick={() => setPannelStatus(true)} className="absolute right-0 m-2 p-2 cursor-pointer" style={{ backgroundColor: "red", borderRadius: 10, top: "15%" }}>
                <small className="font-bold text-xs text-white">View Donation Options</small>
            </div>
            <div className="blog-view">
                <h4 className="font-bold">{ActiveBlog?.heading}</h4>
                <h6 className={ActiveBlog?.author ? 'flex' : 'hidden'}>Authored By: <span className="font-bold">&nbsp;{ActiveBlog?.author}</span></h6>
                {ActiveBlog?.date && <small>{ActiveBlog?.date}</small>}
                <br />

                {ActiveBlog?.heading?.indexOf("Generation  Gender South Africa to launch a GBV") > -1 &&
                    <FemaleGBV
                        Image={ActiveBlog?.image}
                        Caption={ActiveBlog?.imageCaption} />}
                {ActiveBlog?.heading?.indexOf("ActionAid Responds to Tornado Devastation in oTongaat KZN") > -1 &&
                    <Tornado
                        Image={ActiveBlog?.image}
                        Caption={ActiveBlog?.imageCaption} />}
                {ActiveBlog?.heading?.indexOf("Xenophobia Statement") > -1 &&
                    <Xenophobia />}

                {ActiveBlog?.heading?.indexOf("LGBTIAQ activists push back") > -1 &&
                    <PushBack Image={ActiveBlog?.image}
                        Caption={ActiveBlog?.imageCaption} />}

                {ActiveBlog?.heading?.indexOf("Press Release to the President") > -1 &&
                    <ToThePresident />}

                {ActiveBlog?.heading?.indexOf("I Define Me Press Release") > -1 &&
                    <DefineMePress />}

                {ActiveBlog?.heading?.indexOf("Girls’ Club Conference") > -1 &&
                    <GirlsClub />}

                {ActiveBlog?.heading?.indexOf("Courts of Young womxn") > -1 &&
                    <CourtsOfYoung />}

                {ActiveBlog?.heading?.indexOf("Courts of womxn Press Release") > -1 &&
                    <CourtsOfYoungRelease />}
                <br />
            </div>

            {PannelStatus && <DonationsPannel PannelStatus={PannelStatus} setPannelStatus={setPannelStatus} />}

        </div>
    </div>
}