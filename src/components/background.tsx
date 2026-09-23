// components/Background.tsx
"use client"
import React, { useEffect } from 'react';

interface BackgroundProps {
  color?: string;   // Fallback background color
  videoUrl: string; // URL of the video
  opacity?: number; // Opacity of the video background
}

const Background: React.FC<BackgroundProps> = ({ color = '#010019', videoUrl, opacity = 0.5 }) => {
  useEffect(() => {
    // Apply background color to the body
    document.body.style.backgroundColor = color;

    // Cleanup to reset background color when component unmounts or on route change
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [color]);

  return (
    <div className="video-background">
      <video autoPlay loop muted className="background-video">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <style jsx>{`
        .video-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -1;
          opacity: ${opacity}; /* Adjust the opacity of the video */
        }

        .background-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default Background;