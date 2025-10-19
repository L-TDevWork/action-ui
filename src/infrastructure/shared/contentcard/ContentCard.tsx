import type { JSX } from "react";

export const ContentCard: React.FC<{ Content: TBlog, toggleBlogArticle: (content: TBlog) => void }> = ({ Content, toggleBlogArticle }): JSX.Element => {
    return <div className="blog">
        {Content?.headerImage && <img src={Content?.headerImage} alt={Content?.heading} />}
        <h4>{Content?.heading}</h4>
        <p>{Content?.subMessage}</p>
        <div onClick={() => toggleBlogArticle(Content)} className="btn-read-more">
            <span>Read More</span>
        </div>
    </div>
}