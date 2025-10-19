import { type JSX } from "react";
import { RedBoarder } from "../../../infrastructure/shared/redborder/RedBoarder";
import StoryGrid from "./StoryGrid";


export const Stories: React.FC<{}> = (): JSX.Element => {
    return <>
<div className="meet-the-team-container" style={{ marginTop: "10%" }}>
<div className="team-content">
 <div className="hero-section">
   
        <p>Stories page</p>
          <RedBoarder />
      </div>
      <StoryGrid />
</div>
 
</div>
    </>
}

