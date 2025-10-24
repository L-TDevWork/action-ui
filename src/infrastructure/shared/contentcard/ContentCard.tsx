import type { JSX } from "react";

import ImageOne from "../../../assets/images/YUW-2-150x150.png";

export const ContentCard: React.FC<{ Article: TBlog, toggleBlogArticle: (Article: TBlog) => void }> = ({ Article, toggleBlogArticle }): JSX.Element => {
    return <div className="article-holder" onClick={() => toggleBlogArticle(Article)}>
        <div className="article-image" style={{ backgroundImage: `url(${Article?.image ? Article?.image : ImageOne})` }}></div>
        <div className="article-details">
            <div className="article-author">{Article?.author ? Article?.author : 'Article Author'}</div>
            <div className="article-name-topic">{Article.subMessage.substring(0, 25)}...</div>
            <div className="article-date">{Article?.date ? Article?.date : 'Article Date'}</div>
        </div>
    </div>
}