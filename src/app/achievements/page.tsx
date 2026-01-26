import React, { CSSProperties } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"; // Adjust import path if necessary

const fixedSizeStyle: CSSProperties = {
  width: '100%', // Full width on mobile
  height: '180px', // Smaller height for mobile
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  borderRadius: '15px',
};

const imageStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '15px',
};

const textStyle = {
  title: {
    fontSize: '1.25rem', // Default title size
    fontWeight: 'bold',
  },
  description: {
    fontSize: '1rem', // Default description size
  },
};

const achievements = [
  {
    title: "Innovation Mela 2025",
    description: "2nd Position",
    header: "",
    icon: <img src="/images/IM_2.png" alt="Icon 1" style={imageStyle} />,
  },
  {
    title: "E-yantra 2024-25",
    description: "Semi finalist",
    header: "",
    icon: <img src="/images/drone_eyantra.jpg" alt="Icon 1" style={imageStyle} />,
  },
  {
    title: "E-yantra 2024-25",
    description: "Semi finalist",
    header: "",
    icon: <img src="/images/fpga.jpg" alt="Icon 1" style={imageStyle} />,
  },
  {
    title: "E-yantra 2024-25",
    description: "Semi finalist",
    header: "",
    icon: <img src="/images/balancer.png" alt="Icon 1" style={imageStyle} />,
  },

  {
    title: "Innovation Mela 2025",
    description: "3rd Position",
    header: "",
    icon: <img src="/images/IM_3.PNG" alt="Icon 1" style={imageStyle} />,
  },
  {
    title: "INVICTUS-DTU",
    description: "3rd Position",
    header: "",
    icon: <img src="/images/dtu_LFR.jpg" alt="Icon 1" style={imageStyle} />,
  },
  {
    title: "GALACTIC DOGDER-IIT KANPUR",
    description: "3rd Position",
    header: "",
    icon: <img src="/images/galactic.jpg" alt="Icon 1" style={imageStyle} />,
  },
  {
    title: "Escalade",
    description: "Finalists",
    header: "",
    icon: <img src="/images/escalade.png" alt="Icon 1" style={imageStyle} />,
  },
  {
    title: "Code CLash 1.0",
    description: "1st Position",
    header: "",
    icon: <img src="/images/cc.png" alt="Icon 1" style={imageStyle} />,
  },
  {
    title: "HackWithMAIT 5.0",
    description: "1st Position",
    header: "",
    icon: <img src="/images/hwm5.png" alt="Icon 1" style={imageStyle} />,
  },
  {
    title: "HackBVP",
    description: "3rd Position",
    header: "",
    icon: <img src="/images/hackbvp.png" alt="Icon 1" style={imageStyle} />,
  },
  {
    title: "eYantra Luminosity Drone",
    description: "Semi-Finalists",
    header: "",
    icon: <img src="/images/drone.png" alt="Icon 1" style={imageStyle} />,
  },
  {
    title: "eYantra Hologlyph",
    description: "Semi Finalists",
    header: "",
    icon: <img src="/images/hologlyph.png" alt="Icon 1" style={imageStyle} />,
  },
  {
    title: "eYantra Cosmo Logistic",
    description: "Finalists",
    header: "",
    icon: <img src="/images/cosmo.png" alt="Icon 1" style={imageStyle} />,
  },
  {
    title: "Innovation Mela",
    description: "1st Position",
    header: "",
    icon: <img src="/images/imela.png" alt="Icon 1" style={imageStyle} />,
  },
  {
    title: "Code Kshetra",
    description: "1st Position",
    header: "",
    icon: <img src="/images/codekshetra.png" alt="Icon 1" style={imageStyle} />,
  },
  {
    title: "HackJNU",
    description: "TOP 5",
    header: "",
    icon: <img src="/images/hackjnu.png" alt="Icon 1" style={imageStyle} />,
  },
  {
    title: "ABU Robocon",
    description: "Stage 1 (94/100)",
    header: "",
    icon: <img src="/images/aburobocon.png" alt="Icon 1" style={imageStyle} />,
  },
  {
    title: "HackWithMAIT 4.0",
    description: "1st Position",
    header: "",
    icon: <img src="/images/hwm4.png" alt="Icon 1" style={imageStyle} />,
  },

];

const AchievementsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-16 px-4 sm:px-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
        <span className="text-blue-800">A.T.O.M Robotics Lab</span> <br /> Our Journey of Excellence
      </h1>
      <BentoGrid className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((achievement, index) => (
          <BentoGridItem
            key={index}
            title={<div style={textStyle.title} className="text-lg md:text-xl lg:text-2xl text-white">{achievement.title}</div>}
            description={<div style={textStyle.description} className="text-base md:text-lg lg:text-xl text-white">{achievement.description}</div>}
            header={achievement.header}
            icon={<div style={fixedSizeStyle}>{achievement.icon}</div>}
            className="bg-blue-800 p-4"
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default AchievementsPage;
