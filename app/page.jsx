"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Skills from "../src/components/Skills";
import Education from "../src/components/Education";
import Projects from "../src/components/Projects";
import Experience from "../src/components/Experience";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import {
  navItems,
  heroData,
  aboutData,
  skillsData,
  educationData,
  projectsData,
  experienceData,
  contactData,
} from "../src/data/siteContent";
import {
  createSectionVariants,
  sectionHeaderVariants,
  sectionContentVariants,
  listVariants,
  itemVariants,
} from "../src/lib/animations";

const shellClass = "mx-auto w-[min(1120px,92vw)]";
const allSections = ["inicio", ...navItems.map((item) => item.id)];
const aboutSectionVariants = createSectionVariants("left");
const skillsSectionVariants = createSectionVariants("up");
const educationSectionVariants = createSectionVariants("right");
const projectsSectionVariants = createSectionVariants("left");
const experienceSectionVariants = createSectionVariants("right");
const contactSectionVariants = createSectionVariants("up");

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [isNavTransitioning, setIsNavTransitioning] = useState(false);
  const navTransitionTimerRef = useRef(null);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const sectionElements = allSections
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sectionElements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.2, 0.45, 0.7],
      }
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    return () => {
      if (navTransitionTimerRef.current) {
        window.clearTimeout(navTransitionTimerRef.current);
      }
    };
  }, []);

  const handleNavClick = (event, sectionId) => {
    event.preventDefault();

    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }

    setActiveSection(sectionId);
    setIsNavTransitioning(true);
    closeMenu();

    const headerOffset = 96;
    const top = section.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });

    if (window.location.hash !== `#${sectionId}`) {
      window.history.replaceState(null, "", `#${sectionId}`);
    }

    if (navTransitionTimerRef.current) {
      window.clearTimeout(navTransitionTimerRef.current);
    }

    navTransitionTimerRef.current = window.setTimeout(() => {
      setIsNavTransitioning(false);
    }, 520);
  };

  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-[var(--bg)] text-[var(--text)]">
      <AnimatePresence>
        {isNavTransitioning ? (
          <motion.div
            className="pointer-events-none fixed left-0 right-0 top-0 z-[90] h-1 origin-left bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500"
            initial={{ scaleX: 0, opacity: 0.85 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ opacity: 0, scaleX: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        ) : null}
      </AnimatePresence>

      <div className="bg-grid" aria-hidden="true" />
      <div className="blue-flow blue-flow-a" aria-hidden="true" />
      <div className="blue-flow blue-flow-b" aria-hidden="true" />
      <div className="blue-flow blue-flow-c" aria-hidden="true" />
      <div
        className="orb-a pointer-events-none fixed -right-24 -top-24 z-[4] h-[420px] w-[420px] rounded-full bg-blue-500/24 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="orb-b pointer-events-none fixed -bottom-20 -left-20 z-[4] h-[360px] w-[360px] rounded-full bg-blue-300/17 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative z-20">
        <Navbar
          shellClass={shellClass}
          navItems={navItems}
          activeSection={activeSection}
          isMenuOpen={isMenuOpen}
          onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
          onNavigate={handleNavClick}
        />

        <main className="pb-14">
          <Hero
            shellClass={shellClass}
            heroData={heroData}
            listVariants={listVariants}
            itemVariants={itemVariants}
            onNavigate={handleNavClick}
          />
          <About
            shellClass={shellClass}
            aboutData={aboutData}
            sectionVariants={aboutSectionVariants}
            headerVariants={sectionHeaderVariants}
            contentVariants={sectionContentVariants}
          />
          <Skills
            shellClass={shellClass}
            skillsData={skillsData}
            sectionVariants={skillsSectionVariants}
            headerVariants={sectionHeaderVariants}
            contentVariants={sectionContentVariants}
          />
          <Education
            shellClass={shellClass}
            educationData={educationData}
            sectionVariants={educationSectionVariants}
            headerVariants={sectionHeaderVariants}
            contentVariants={sectionContentVariants}
            listVariants={listVariants}
            itemVariants={itemVariants}
          />
          <Projects
            shellClass={shellClass}
            projectsData={projectsData}
            sectionVariants={projectsSectionVariants}
            headerVariants={sectionHeaderVariants}
            contentVariants={sectionContentVariants}
            listVariants={listVariants}
            itemVariants={itemVariants}
          />
          <Experience
            shellClass={shellClass}
            experienceData={experienceData}
            sectionVariants={experienceSectionVariants}
            headerVariants={sectionHeaderVariants}
            contentVariants={sectionContentVariants}
            listVariants={listVariants}
            itemVariants={itemVariants}
          />
          <Contact
            shellClass={shellClass}
            contactData={contactData}
            sectionVariants={contactSectionVariants}
            headerVariants={sectionHeaderVariants}
            contentVariants={sectionContentVariants}
          />
        </main>

        <Footer shellClass={shellClass} />
      </div>
    </div>
  );
}
