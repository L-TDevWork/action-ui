import { useEffect, type JSX } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../core/context/AppContext";
import { PressReleases } from "../../../core/constants/Constants";
import { RedBoarder } from "../../../infrastructure/shared/redborder/RedBoarder";
import { ContentCard } from "../../../infrastructure/shared/contentcard/ContentCard";

import FemaleFBVImage from "../../../assets/images/Generation-G-Primary-Logo-1-1-300x204-1.jpg";

export const PressRelease: React.FC<{}> = (): JSX.Element => {
    const navigate = useNavigate();

    const { setActiveBlog, ActiveBlog } = useAppContext();

    const toggleBlogArticle = (blog: TBlog) => {
        setActiveBlog(blog);
        navigate(`/press-release-view/${blog?.heading.replaceAll(" ", "-")}`);
    }

    useEffect(() => {
        if (ActiveBlog)
            ActiveBlog.headerImage = FemaleFBVImage;
    }, [ActiveBlog]);

    return <div className="blog-container" style={{ marginTop: "10%" }}>
        <div className="blog-content">
            <h1>Press Release</h1>
            <RedBoarder />
            <div className="blogs-area">
                {PressReleases?.map((blog: TBlog, index: number) => {
                    return <ContentCard Content={blog} key={index} toggleBlogArticle={toggleBlogArticle} />
                })}
            </div>
            <div className="blogs-view-area"></div>
        </div>
        <br />
    </div>
}