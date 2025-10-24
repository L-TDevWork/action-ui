import React from "react";
import StoryCard from "./StoryCard";
import woman1 from "../../../assets/images/YUW-2-150x150.png";


const stories = [
  {
    id: "1",
    title: "Women Uplifting Women",
    image: woman1,
    excerpt: "How women are supporting each other in marginalized communities.",
    link: "/stories/1",
  },
  {
    id: "2",
    title: "Breaking Barriers",
    image: woman1,
    excerpt: "Women breaking gender barriers in the tech industry.",
    link: "/stories/2",
  },
  {
    id: "3",
    title: "Education Empowerment",
    image: woman1,
    excerpt: "The impact of education on women's lives in rural areas.",
    link: "/stories/3",
  },
  {
    id: "4",
    title: "STEM Leadership",
    image: woman1,
    excerpt: "How women are leading STEM initiatives globally.",
    link: "/stories/4",
  },
  {
    id: "5",
    title: "Community Builders",
    image: woman1,
    excerpt: "Grassroots efforts to empower women through community work.",
    link: "/stories/5",
  },
  {
    id: "6",
    title: "Rural Innovation",
    image: woman1,
    excerpt: "Innovation driven by women in rural economies.",
    link: "/stories/6",
  },
  {
    id: "7",
    title: "Future of Equality",
    image: woman1,
    excerpt: "Exploring gender equality in emerging industries.",
    link: "/stories/7",
  },
  {
    id: "8",
    title: "Mentorship Matters",
    image: woman1,
    excerpt: "How mentorship is shaping women's careers worldwide.",
    link: "/stories/8",
  },
];


const StoryGrid: React.FC = () => {
  return (
    <section className="story-grid">
      {stories.map((story) => (
        <StoryCard
          key={story.id}
          title={story.title}
          image={story.image}
          excerpt={story.excerpt}
          link={story.link}
        />
      ))}
    </section>
  );
};

export default StoryGrid;
