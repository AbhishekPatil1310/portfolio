import React from 'react';

const projects = [
  {
    title: 'Advestore',
    description:
      'An ad-viewing platform where users can watch ads, give feedback, and advertisers track analytics. Built with MERN stack.',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: 'https://advestor-frontend.vercel.app/',
  },
  {
    title: 'Herbarium: the virtual garden',
    description:
      'A virtual garden app to explore and learn about various plants. Users view plant details, and share experiences.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://herbal-garden-git-main-abhishek-kumars-projects-7905b109.vercel.app/home',
  },
  {
    title: 'Real time workout tracking system',
    description:
      'A real-time workout tracking system that allows users to log workouts, track progress, and show the calory burn.',
    tech: ['Flask', 'HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/AbhishekPatil1310/A4.git',
  },
  {
    title: 'Event ticket booking system',
    description:
      'A web application for booking tickets for various events. Users can view events, book tickets, and manage bookings.',
    tech: ['Flask', 'MySQL', 'Express.js', 'React'],
    link: 'https://event-ticket-booking-o0cxa2ohs-abhisheks-projects-680a2fd9.vercel.app/',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen pt-24 px-6 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-bold text-center text-black mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-xl transition text-black mb-4"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-black mb-4">{project.description}</p>

              {/* 🔹 Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 text-sm text-black mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-white/20 px-3 py-1 rounded-full border border-white/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* 🔗 Project Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
