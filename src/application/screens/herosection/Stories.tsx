import { type JSX } from "react";
import StoryGrid from "./StoryGrid";
import { RedBoarder } from "../../../infrastructure/shared/redborder/RedBoarder";


export const Stories: React.FC<{}> = (): JSX.Element => {
    return <div className="meet-the-team-container">
        <div className="team-content">
            <h1>Stories</h1>
            <RedBoarder />
            <StoryGrid />
        </div>
    </div>
}

