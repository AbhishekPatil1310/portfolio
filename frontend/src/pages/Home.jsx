import React from 'react';
import Navbar from '../components/Navabar';
import Profile from '../components/Profile';
import AboutMe from '../components/About';
import Projects from '../components/Project';
import ContactForm from '../components/contact';
import SectionWrapper from '../components/SectionWraper';

const Home = () => {
  return (
    <div className="relative overflow-hidden font-sans">
      {/* 🔹 Background Video */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 brightness-75"
        src="/video5.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <Navbar />

      {/* 🔹 Profile Section */}
      <SectionWrapper id="profile">
        <div className="w-full max-w-5xl">
          <Profile />
        </div>
      </SectionWrapper>

      {/* 🔹 About Section */}
      <SectionWrapper id="about">
        <div className="w-full max-w-5xl">
          <AboutMe />
        </div>
      </SectionWrapper>

      {/* 🔹 Projects Section */}
      <SectionWrapper id="projects">
        <div className="max-w-6xl w-full">
          <Projects />
        </div>
      </SectionWrapper>

      {/* 🔹 Contact Section */}
      <SectionWrapper id="contact">
        <div className="max-w-3xl w-full bg-white/20 backdrop-blur-md rounded-xl shadow-xl p-10 text-center text-white border border-white/30">
          <h2 className="text-4xl font-bold mb-6 tracking-wide">Contact Me</h2>
          <p className="mb-6 text-lg">I'd love to hear from you. Send a message below!</p>
          <ContactForm />
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Home;
