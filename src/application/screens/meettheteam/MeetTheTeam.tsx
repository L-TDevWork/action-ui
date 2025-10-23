import { type JSX } from "react";
import { RedBoarder } from "../../../infrastructure/shared/redborder/RedBoarder";
import Caroline from "../../../assets/images/meet-the-team/Caroline Ntaopane - Swedish Bio Program Manager.png"; 
import Eline from "../../../assets/images/meet-the-team/Eline Hietbrink - Fundraising and Programs Support.png"; 
import Joyce from "../../../assets/images/meet-the-team/Joyce Matsiliso - Fundraising Intern.png"; 
import Kelefang from "../../../assets/images/meet-the-team/Kelefang Shuping - Supporter Care Officer.png"; 
import Lethabong from "../../../assets/images/meet-the-team/Lethabong Khalo - Finance Manager.png"; 
import Lorraine from "../../../assets/images/meet-the-team/Lorraine Kakaza - Finance Assistant.png"; 
import Mathapelo from "../../../assets/images/meet-the-team/Mathapelo Makhubu - Communications Intern.png"; 
import Ntsiki from "../../../assets/images/meet-the-team/Ntsiki Khunju - Young Urban Women Project Co-ordinator.png"; 

interface TeamMember {
  name: string;
  title: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Caroline Ntaopane - Swedish ",
    title: "Bio Program Manager",
    image: Caroline,
  },

  {
    name: "Eline Hietbrink - Fundraising ",
    title: " and Programs Support",
    image: Eline,
  },
  {
    name: "Joyce Matsiliso",
    title: "Fundraising Intern",
    image: Joyce,
  },
  {
    name: "Kelefang Shuping",
    title: "Supporter Care Officer",
    image: Kelefang,
  },
  {
    name: "Lethabong Khalo ",
    title: "Finance Manager",
    image: Lethabong,
  },
  {
    name: "Lorraine Kakaza ",
    title: "Finance Assistant",
    image: Lorraine,
  },
  {
    name: "Mathapelo Makhubu ",
    title: "Communications Intern",
    image: Mathapelo,
  },
  { name: "Ntsiki Khunju - Young Urban",
    title: " Women Project Co-ordinator", 
    image: Ntsiki },
];

export const MeetTheTeam: React.FC = (): JSX.Element => {
  const renderTeam = (members: TeamMember[]): JSX.Element[] =>
    members.map((member, index) => (
      <div key={index} className="image-item">
        <h1 className="image-heading">
          {member.name} <br /> {member.title}
        </h1>
        <div className="image-wrapper">
          <img src={member.image} alt={member.name} />
        </div>
      </div>
    ));

  return (
    <div className="meet-the-team-container" style={{ marginTop: "10%" }}>
      <div className="team-content">
        <RedBoarder />
        <h1>Meet The Team</h1>
        <p>
          <strong>
            At ActionAid South Africa, our team is made up of{" "}
            <span style={{ color: "#e02b20" }}>
              passionate activists, advocates, and{" "}
              <span style={{ color: "#e0291f" }}>change makers</span>
            </span>
            <span style={{ color: "#e0291f" }}> committed</span>
          </strong>{" "}
          to dismantling systems of injustice. Rooted in feminist principles, we
          work alongside communities, youth, and grassroots movements to
          challenge inequality, demand accountability, and drive transformative
          change. Our collective strength lies in our dedication to climate
          justice, women’s rights, and economic justice — ensuring that those
          most affected by oppression lead the fight for a just and equitable
          world.
        </p>

        <div className="devider"></div>
      </div>

      <div className="image-section">
        <div className="top-images">{renderTeam(teamMembers.slice(0, 4))}</div>
        <div className="bottom-images">{renderTeam(teamMembers.slice(4))}</div>
      </div>
    </div>
  );
};
