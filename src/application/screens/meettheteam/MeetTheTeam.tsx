import { type JSX } from "react";
import { RedBoarder } from "../../../infrastructure/shared/redborder/RedBoarder";
import SakhilaImage from "../../../assets/images/66.png"; // Replace with actual images as needed

interface TeamMember {
  name: string;
  title: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Sakhile Zungu",
    title: "Interim Country Director",
    image: SakhilaImage,
  },

  {
    name: "Thando Mokoena",
    title: "Finance Lead",
    image: SakhilaImage,
  },
  {
    name: "Lindiwe Khumalo",
    title: "Campaign Manager",
    image: SakhilaImage,
  },
  {
    name: "Sipho Dlamini",
    title: "Community Liaison",
    image: SakhilaImage,
  },
  {
    name: "Nomsa Mthethwa",
    title: "Youth Engagement Officer",
    image: SakhilaImage,
  },
  {
    name: "Kagiso Mokoena",
    title: "Legal Advisor",
    image: SakhilaImage,
  },
  {
    name: "Buhle Mhlongo",
    title: "Communications Officer",
    image: SakhilaImage,
  },
  { name: "Neo Radebe", title: "Monitoring & Evaluation", image: SakhilaImage },
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
