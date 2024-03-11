"use client"
import Navbar from '../components/common/Navbar';
import Home from '../components/Home'
import AboutMe from '../components/AboutMe'
import dynamic from 'next/dynamic';
import { useRef, RefObject } from "react";

const UpArrow = dynamic(() => import('../components/common/UpArrow'), { ssr: false });

export default function Page() {
  const homeRef: RefObject<HTMLDivElement> = useRef(null);
  const aboutMeRef: RefObject<HTMLDivElement> = useRef(null);
  
  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <section ref={homeRef}>
        <Home/>
      </section>
      <section ref={aboutMeRef}>
        <AboutMe/>
      </section>
      <UpArrow/>
      
    </div>
  );
}
