"use client"; // Ensure this line is at the top of your file

import React, { useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import { WobbleCard } from "@/components/ui/wobble-card"; // Ensure WobbleCard accepts onClick
import Modal from "@/components/ui/modal"; // Import a modal component
import Image from 'next/image'; // Updated for Next.js 13 image handling

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Define the Section type
type Section = {
  title?: string;
  image?: string; // Optional image for the section
  video?: string; // Optional video for the section
  content: (string | JSX.Element)[]; // Allow for bold text
};

// Define the Project type
type Project = {
  title: string;
  description: string;
  bgImage: string;
  sections: Section[]; // Updated to sections array
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]); // State to store projects data
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null); // State to store the selected project for the modal
  const itemsPerPage = 6;

  useEffect(() => {
    // Fetch projects data from the JSON file
    fetch('/projects/projects.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error("Error loading projects:", error));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project); // Set the selected project to show in modal
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-32 px-8">

      <h1
        className={`${poppins.className} text-4xl md:text-4xl font-bold mb-12 text-center`}
      >
        We at <span className="text-blue-500">A.T.O.M Robotics Labs</span>{" "}
        <br /> have built some exciting projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        {currentProjects.map((project, index) => (
          <div key={index} onClick={() => handleCardClick(project)} className="cursor-pointer">
            <WobbleCard
              containerClassName="min-h-[300px] flex flex-col justify-between relative"
              style={{
                backgroundImage: `url(${project.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="p-4 flex-1">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
                  {project.title}
                </h2>
                <p className="mt-4 text-left text-base/6 text-neutral-200">
                  {project.description}
                </p>
              </div>
            </WobbleCard>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center space-x-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded-full ${
              currentPage === index + 1 ? "bg-blue-800" : "bg-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {selectedProject && (
        <Modal 
          isOpen={!!selectedProject} 
          onClose={closeModal}
          title={selectedProject.title}
        >
          <div className="p-8 rounded-lg text-white">
            {selectedProject.sections.map((section, index) => (
              <div key={index} className="mb-6">
                {section.title && (
                  <h3 className="text-4xl font-semibold text-blue-500">{section.title}</h3>
                )}
                {section.video && (
                  <div className="video-container my-2">
                    <iframe 
                      src={`https://www.youtube.com/embed/${new URL(section.video).searchParams.get('v')}`}
                      title={section.title}
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
                {section.image && (
                  <Image 
                    src={section.image} 
                    alt={section.title || "Project Image"} 
                    width={1920} // Set appropriate dimensions
                    height={1080} 
                    className="w-full h-auto my-2 object-cover"
                  />
                )}
                {section.content?.map((paragraph, i) => (
                  <p key={i} className="text-lg my-4">
                    {/* Only call split if paragraph is a string */}
                    {typeof paragraph === "string" ? (
                      paragraph.split(/(<b>.*?<\/b>)/g).map((part, j) => 
                        part.startsWith('<b>') && part.endsWith('</b>') ? (
                          <strong key={j}>{part.replace(/<\/?b>/g, '')}</strong>
                        ) : (
                          part
                        )
                      )
                    ) : (
                      paragraph // Render as-is if it's a JSX.Element
                    )}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Projects;
