import { type JSX } from "react";
import { Blogs } from "../../../core/constants/Constants";

export const BlogScreen: React.FC<{}> = (): JSX.Element => {
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
                    return <div key={index} className="blog">
                        <h4>{blog?.heading}</h4>
                        <p>{blog?.subMessage}</p>
                        <div className="btn-read-more">
                            <span>Read More</span>
                        </div>
                    </div>
                })}
            </div>
        </div>
        <br />
    </div>
}