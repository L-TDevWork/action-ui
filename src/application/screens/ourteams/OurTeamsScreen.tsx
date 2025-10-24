import { type JSX } from "react";
import { RedBoarder } from "../../../infrastructure/shared/redborder/RedBoarder";
import SakhilaImage from "../../../assets/images/66.png"; 


interface TeamMember {
  name: string;
  title: string;
  image: string;
  description?: string;
}
interface TeamSectionProps {
  title: string;
  members: TeamMember[];
}

const seniorManagement: TeamMember[] = [
    {
      name: "Nondumiso Nsibande",
      title: "Country Director",
      image:
        "https://www.actionaid.org.za/wp-content/uploads/2019/12/Nondumiso-Nsibande-boardmembers.png",
    },
    {
      name: "Lindelwe Nxumalo",
      title: "Women’s Rights Manager",
      image:
        "https://www.actionaid.org.za/wp-content/uploads/2021/10/lin-raw-4.jpeg",
    },
  ];



   const boardMembers: TeamMember[] = [
    {
      name: "William Gumede",
      title: "Board Member",
      image:
        "https://www.actionaid.org.za/wp-content/uploads/2019/12/William-Gumede-boardmembers.png",
    },
    {
      name: "Sarita Martin",
      title: "Board Member",
      image:
        "https://www.actionaid.org.za/wp-content/uploads/2019/12/Sarita-Martin-boardmembers.png",
    },
    {
      name: "Adila Chowan",
      title: "Board Member",
      image:
        "https://www.actionaid.org.za/wp-content/uploads/2019/12/Adila-Chohan-boardmembers.png",
    },
    {
      name: "Teresa Yates",
      title: "Board Member",
      image:
        "https://www.actionaid.org.za/wp-content/uploads/2019/12/Teresa-Yates-boardmembers.png",
    },
    {
      name: "Ernest Theron",
      title: "Board Member",
      image:
        "https://www.actionaid.org.za/wp-content/uploads/2019/12/Ernst-Theron-profile.jpg",
    },
  ];
const TeamMemberCard: React.FC<TeamMember> = ({ name, title, image }) => (
  <div className="team-card">
    <img src={image} alt={name} className="team-img" />
    <h2>{name}</h2>
    <p>{title}</p>
  </div>
);

const TeamSection: React.FC<TeamSectionProps> = ({ title, members }) => (
  <section className="team-section">
    <h1>{title}</h1>
    <div className="team-grid">
      {members.map((m, idx) => (
        <TeamMemberCard key={idx} {...m} />
      ))}
    </div>
  </section>
);

export const OurTeamsScreen: React.FC = (): JSX.Element => {
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
    <main className="our-teams-page">
      {/* <header className="page-header">
        <div className="container">
          <h1>Our Teams</h1>
          <p className="breadcrumbs">
          </p>
        </div>
      </header> */}

      <div className="container">
        <TeamSection title="Senior Management Team" members={seniorManagement} />
        <TeamSection title="Board Members" members={boardMembers} />
      </div>

      {/* <footer className="page-footer">
        <p>© 2019 ActionAid South Africa. All Rights Reserved.</p>
      </footer> */}
    </main>
  );
};

export default OurTeamsScreen;