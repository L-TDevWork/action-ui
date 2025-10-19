import type { JSX } from "react";

import { SorryNoJob } from "./blogs/SorryNoJob";
import { YouthCourage } from "./blogs/YouthCourage";
import { TotalShutDown } from "./blogs/TotalShutDown";
import { BlogTwoMessage } from "./blogs/BlogTwoMessage";
import { BlogOneMessage } from "./blogs/BlogOneMessage";
import { BlogThreeMessage } from "./blogs/BlogThreeMessage";
import { useAppContext } from "../../../core/context/AppContext";

export const BlogView: React.FC<{}> = (): JSX.Element => {
    const { ActiveBlog } = useAppContext();

    return <div className="blogs-view-container" style={{ paddingTop: "15%" }}>
        <div className="blog-view">
            <h4 className="font-bold">{ActiveBlog?.heading}</h4>
            <h6 className={ActiveBlog?.author ? 'flex' : 'hidden'}>Authored By: <span className="font-bold">&nbsp;{ActiveBlog?.author}</span></h6>
            <br />
            
            {ActiveBlog?.heading?.indexOf("PERSPECTIVE: Multi-faceted response to GBV in mining communities.") > -1 &&
                <BlogOneMessage
                    Image={ActiveBlog?.image}
                    Caption={ActiveBlog?.imageCaption} />}

            {ActiveBlog?.heading?.indexOf("Empowering the Future: ActionAid South Africa’s Young Urban Women’s Feminist Economy Manifesto") > -1 &&
                <BlogThreeMessage
                    Image={ActiveBlog?.image} />}

            {ActiveBlog?.heading?.indexOf("Man can’t be feminist") > -1 &&
                <BlogTwoMessage />}

            {ActiveBlog?.heading?.indexOf("Sorry, no job") > -1 &&
                <SorryNoJob />}

            {ActiveBlog?.heading?.indexOf("Total Shutdown") > -1 &&
                <TotalShutDown />}

            {ActiveBlog?.heading?.indexOf("Youth courage") > -1 &&
                <YouthCourage />}

            {!ActiveBlog?.withAddedComp && <p>{ActiveBlog?.message}</p>}
            <br />
        </div>
    </div>
}