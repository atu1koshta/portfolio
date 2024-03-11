"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Menu from "./common/Menu";

const Home: React.FC = () => {
  const [navbarHeight, setNavbarHeight] = useState<number>(100); // Initial height of the navbar
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Calculate the height of the navbar dynamically (if needed)
    const navbar = document.getElementById("navbar");
    if (navbar) {
      const height = navbar.clientHeight;
      setNavbarHeight(height);
    }
  }, []);

  return (
    <div
      className={styles.container}
      style={{ height: `calc(100vh - ${navbarHeight}px)` }}
    >
      {/* Navbar */}
      <nav className={styles.hamburgerContainer}>
        <div className={styles.hamburger}>
          {/* Hamburger icon */}
          <div className={styles.hamburgerIcon} onClick={toggleMenu}>
            <div className={styles.hamburgerIconWrapper}>
              <Image src="/hamburger-icon.svg" alt="Hamburger Icon" width={30} height={30} />
            </div>
          </div>
        </div>
      </nav>
      {/* Menu component */}
      <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      {/* Intro Container */}
      <div className={styles.introContainer}>
        <div className={styles.introContent}>
          <h1 className={styles.title}>Hi, I am Atul Koshta</h1>
          <p className={styles.description}>
            Aspired and self-motivated freelancer
          </p>
        </div>
      </div>
      {/* Image Container */}
      <div className={styles.imageContainer}>
        <Image
          src="/atul-koshta.png" // Adjust the image path as needed
          alt="Atul Koshta"
          layout="fill" // Fill the parent container
          objectFit="cover" // Cover the container without distortion
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default Home;
