import React from "react";

export const GPA = 3.95;
export const languages = [
  "Java",
  "Python",
  "Go",
  "C",
  "C++",
  "JavaScript",
  "Kotlin",
];

export const tools = [
  "Telegraf",
  "Chef",
  "GraphQL",
  "React",
  "Redis",
  "MBeans"
];

export const undergraduateCourses = [
  "Object-Oriented Design",
  "Artificial Intelligence",
  "Discrete Structures",
  "Logic & Computation",
  "Computer Systems",
  "Theory of Computation",
  "Object-Oriented Design",
  "Networks & Distributed Systems",
  "Embedded Design & Enabling Robotics",
];
export const mathCourses = [
  "Calculus III",
  "Advanced Linear Algebra",
  "Differential Equations",
  "Probability & Statistics",
];

export const graduateCourses = [
  "Algorithms",
  "Principles of Programming Languages",
];

export const projects = [
  {title: "Voronoi Tesselations",
    content: <div><p>For fun, I implemented Fortune's Algorithm, which uses a binary search tree and priority queue to partition a plane into a set of regions equidistant to pre-specified points. It uses a 'sweeping line' to create parabolas that trace out the individual lines on the diagram.</p></div>,
    image: "voronoi.png",
    languages: ["Java"],
    link: "https://github.com/ebriannem/Voronoi",},
  {title: "FreeCell AI",
  content: <div><p> I experimented with using an AI to play FreeCell solitaire. We used Python to implement FreeCell itself, then began testing various searches and heuristics. We read various
  research papers to compare our searches and heuristics with others' then used what we learned to improve. </p></div>,
  image: "freecell.png",
  languages: ["Python"],
    link: "",},
  {title: "This Website",
    content: <div><p>I created the original version of this website using plain Javascript for fun & as a way to learn more about the front-end side of web development. Similarly, I created this updated (and much less messy!) version to learn more about React. The old version can still be found on my github.</p></div>,
    image: "website.png",
    languages: ["React", "Javscript", "CSS"],
    link: "https://github.com/ebriannem/contrastsite",},

  {title: "Gallery WebApp",
    content: <div><p>As a fun personal project & way to learn a bit more about databases and react, I've been working on a webapp for displaying arrangements of images, notes, etc. </p></div>,
    image: "galleryloaf.png",
    languages: ["React", "JavaScript", "Firestore"],
    link: "https://github.com/ebriannem/galleryloaf",}
];

export const industryExperience = [
  {company: "Intuit",
    title: "Software Engineering Co-Op",
    dates: "May 2019 - December 2019 (Ongoing)",
    content: <div><p>At Intuit, I've had the opportunity to take a project from conception to production. Given the concept of my project, I researched various tools and compared them. Working on a Scrum team, I then helped implement it using the tools we'd chosen. Among other things, my work included writing plugins for Telegraf in Go, adding to existing industry code using Java, and writing a Chef cookbook in Ruby.</p></div>,
    languages: ["Java", "GoLang", "Ruby", "Kotlin"],
    tools: ["Telegraf", "Chef", "GraphQL", "DynamoDB", "Wavefront", "MBeans"],
  }
];
