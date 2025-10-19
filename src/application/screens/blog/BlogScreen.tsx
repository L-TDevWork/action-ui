import { type JSX } from "react";
import { useNavigate } from "react-router-dom";
import { Blogs } from "../../../core/constants/Constants";
import { useAppContext } from "../../../core/context/AppContext";
import { ContentCard } from "../../../infrastructure/shared/contentcard/ContentCard";

export const BlogScreen: React.FC<{}> = (): JSX.Element => {
    const navigate = useNavigate();

    const { setActiveBlog } = useAppContext();

    const toggleBlogArticle = (blog: TBlog) => {
        setActiveBlog(blog);
        navigate(`/blog-view/${blog?.heading.replaceAll(" ", "-")}`);
    }

    return <div className="blog-container" style={{ marginTop: "10%" }}>
        <div className="blog-content">
            <h1>Blog</h1>
            <div className="red-border" style={{
                border: "2px solid red",
                width: 100,
                display: "flex",
                justifyContent: "center"
            }}></div>
            <br />
            <div className="blogs-area">
                {Blogs?.map((blog: TBlog, index: number) => {
                    return <ContentCard Content={blog} key={index} toggleBlogArticle={toggleBlogArticle} />
                })}
            </div>
            <div className="blogs-view-area"></div>
        </div>
        <br />
    </div>
}