import type { JSX } from "react"
import { RedBoarder } from "../../../infrastructure/shared/redborder/RedBoarder";

import { useNavigate } from "react-router-dom";
import { Publications } from "../../../core/constants/Constants";
import { useAppContext } from "../../../core/context/AppContext";
import { ContentCard } from "../../../infrastructure/shared/contentcard/ContentCard";

export const PublicationsScreen: React.FC<{}> = (): JSX.Element => {
    const navigate = useNavigate();
    const { setActiveBlog } = useAppContext();

    const handleActivePub = (pub: TBlog) => {
        setActiveBlog(pub);
        navigate(`/publication/${pub?.heading}`);
    }

    return <div className="publications-container">
        <div className="publications-content">
            <h1>Our Publications</h1>
            <RedBoarder />

            <div className="publications-list">
                {Publications?.map((pub: TBlog, index: number) => {
                    return <ContentCard Article={pub} key={index} toggleBlogArticle={handleActivePub} />
                })}
            </div>
        </div>
    </div>
}