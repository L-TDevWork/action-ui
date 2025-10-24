import React from "react";
import { Link } from "react-router-dom";

interface StoryCardProps {
  title: string;
  image: string;
  excerpt: string;
  link: string;
}

const StoryCard: React.FC<StoryCardProps> = ({ title, image, excerpt, link }) => {
  return (
    <div className="story-card">
      <img src={image} alt={title} className="story-image" />
      <div className="story-content">
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <Link to={link} className="read-more" style={{ backgroundColor: "red", borderRadius: 5,  textAlign: "center" }}> <span>Read more</span> </Link>
      </div>
    </div>
  );
};

export default StoryCard;