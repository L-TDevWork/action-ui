import React from 'react';
import { useParams } from 'react-router-dom';

import woman1 from "../../../assets/images/YUW-2-150x150.png";

const dummyStories = [
  {
    id: "1",
    title: "Women Uplifting Women",
    image: woman1,
     content: `This is the full content for story 1. Inspiring women breaking barriers in STEM fields, overcoming challenges and stereotypes 
  to create innovative solutions and foster inclusive environments. Their stories highlight resilience, creativity, and leadership 
  that pave the way for future generations of women in technology and science.`,
  },
  {
    id: "2",
    title: "Breaking Barriers",
     image: woman1,
    content: `This is the full content for story 2. Inspiring women breaking barriers in STEM fields, overcoming challenges and stereotypes 
  to create innovative solutions and foster inclusive environments. Their stories highlight resilience, creativity, and leadership 
  that pave the way for future generations of women in technology and science.`,
  },
  
  {
    id: "3",
    title: "Education Empowerment",
    image: woman1,
    content: `This is the full content for story 3.Inspiring women breaking barriers in STEM fields, overcoming challenges and stereotypes 
  to create innovative solutions and foster inclusive environments. Their stories highlight resilience, creativity, and leadership 
  that pave the way for future generations of women in technology and science.`,
  },

   {
    id: "4",
    title: "Education Empowerment",
    image: woman1,
    content: `This is the full content for story 4.Inspiring women breaking barriers in STEM fields, overcoming challenges and stereotypes 
  to create innovative solutions and foster inclusive environments. Their stories highlight resilience, creativity, and leadership 
  that pave the way for future generations of women in technology and science.`,
  },

   {
    id: "5",
    title: "Education Empowerment",
    image: woman1,
    content: `This is the full content for story 5.Inspiring women breaking barriers in STEM fields, overcoming challenges and stereotypes 
  to create innovative solutions and foster inclusive environments. Their stories highlight resilience, creativity, and leadership 
  that pave the way for future generations of women in technology and science.`,
  },

  {
    id: "6",
    title: "Education Empowerment",
    image: woman1,
    content: `This is the full content for story 6.Inspiring women breaking barriers in STEM fields, overcoming challenges and stereotypes 
  to create innovative solutions and foster inclusive environments. Their stories highlight resilience, creativity, and leadership 
  that pave the way for future generations of women in technology and science.`,
  },

   {
    id: "7",
    title: "Education Empowerment",
    image: woman1,
    content: `This is the full content for story 7.Inspiring women breaking barriers in STEM fields, overcoming challenges and stereotypes 
  to create innovative solutions and foster inclusive environments. Their stories highlight resilience, creativity, and leadership 
  that pave the way for future generations of women in technology and science.`,
  },

   {
    id: "8",
    title: "Education Empowerment",
       image: woman1,
    content: `This is the full content for story 8.Inspiring women breaking barriers in STEM fields, overcoming challenges and stereotypes 
  to create innovative solutions and foster inclusive environments. Their stories highlight resilience, creativity, and leadership 
  that pave the way for future generations of women in technology and science.`,
  },
];

const StoryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const story = dummyStories.find((s) => s.id === id);

  if (!story) return <p>Story not found.</p>;

  return (
    <div className="story-details-container">
      <div className="story-content">
      <h1>{story.title}</h1>
      <img src={story.image} alt={story.title} />
      <p >{story.content}</p>
    </div></div>
  );
};

export default StoryDetail;
