import type { JSX } from "react"
import { RedBoarder } from "../../../infrastructure/shared/redborder/RedBoarder";

import { useNavigate } from "react-router-dom";
import { Publications } from "../../../core/constants/Constants";
import { useAppContext } from "../../../core/context/AppContext";

import ImageOne from "../../../assets/images/blogs/ActionAid-South-Africa-Newsletter-400x250.png";

export const PublicationsScreen: React.FC<{}> = (): JSX.Element => {
    const navigate = useNavigate();
    const { setActiveBlog } = useAppContext();

    const handleActivePub = (pub: TBlog) => {
        setActiveBlog(pub);
        navigate(`/publication/${pub?.heading}`);
    }

    return <div className="publications-container" style={{ paddingTop: "5%" }}>
        <div className="publications-content">
            <h1>Our Publications</h1>
            <RedBoarder />

            <div className="publications-list">
                {Publications?.map((pub: TBlog, index: number) => {
                    return <div onClick={() => handleActivePub(pub)} key={index} className="publication">
                        <div className="flex">
                            <div className="publication-photo" style={{ backgroundImage: `url(${ImageOne})` }}></div>
                            <div className="publication-content">
                                <h6 className="font-bold">{pub?.heading?.substring(0, 25)}....</h6>
                                <small>{pub?.subMessage?.substring(0, 45)}...</small>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
}