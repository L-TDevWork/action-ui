import React from "react";
import StoryCard from "./StoryCard";

const stories = [
  {
    id: "1",
    title: "Women Uplifting Women",
    image: "https://via.placeholder.com/300x200",
    excerpt: "How women are supporting each other in marginalized communities.",
    link: "/stories/1",
  },
  {
    id: "2",
    title: "Breaking Barriers",
    image: "https://via.placeholder.com/300x200",
    excerpt: "Women breaking gender barriers in the tech industry.",
    link: "/stories/2",
  },
  {
    id: "3",
    title: "Education Empowerment",
    image: "https://via.placeholder.com/300x200",
    excerpt: "The impact of education on women's lives in rural areas.",
    link: "/stories/3",
  },

    {
    id: "4",
    title: "Education Empowerment",
    image: "https://via.placeholder.com/300x200",
    excerpt: "The impact of education on women's lives in rural areas.",
    link: "/stories/4",
  },

    {
    id: "5",
    title: "Education Empowerment",
    image: "https://via.placeholder.com/300x200",
    excerpt: "The impact of education on women's lives in rural areas.",
    link: "/stories/5",
  },

    {
    id: "6",
    title: "Education Empowerment",
    image: "https://via.placeholder.com/300x200",
    excerpt: "The impact of education on women's lives in rural areas.",
    link: "/stories/6",
  },

    {
    id: "7",
    title: "Education Empowerment",
    image: "https://via.placeholder.com/300x200",
    excerpt: "The impact of education on women's lives in rural areas.",
    link: "/stories/7",
  },

    {
    id: "8",
    title: "Education Empowerment",
    image: "https://via.placeholder.com/300x200",
    excerpt: "The impact of education on women's lives in rural areas.",
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
