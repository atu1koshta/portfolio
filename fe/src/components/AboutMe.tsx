// AboutMe.tsx
import React from "react";
import styles from "../styles/AboutMe.module.css";

const AboutMe: React.FC = () => {
  return (
    <div id="about-me" className={styles.aboutMeContainer}>
      <h2 className={styles.aboutMeTitle}>About Me</h2>
      <p className={styles.aboutMeText}>
        I'm a passionate Full Stack Developer with nearly 3 years of experience,
        driven by building high-quality software solutions. Since graduating
        with a dual-degree honors from IIT Kharagpur in 2021, I've honed my
        skills in Python, Ruby on Rails, JavaScript, SQL, and various web
        development frameworks. My experience spans across two companies: TRGT
        Digital and Bluesapling Technologies. In my recent role at TRGT Digital
        as a Software Development Engineer, I spearheaded the creation of a user
        activity tracker, bolstered application security, and optimized
        dashboard performance. These efforts led to significant improvements in
        user experience and application functionality. Previously, at
        Bluesapling Technologies, I engineered an algorithm that streamlined
        user progress updates across multiple groups, resulting in a ~50%
        reduction in API response time. I consistently demonstrate a commitment
        to delivering top-notch solutions, possess exceptional problem-solving
        skills, and maintain a comprehensive understanding of the Software
        Development Lifecycle.
      </p>
    </div>
  );
};

export default AboutMe;
