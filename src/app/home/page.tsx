"use client";

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { Poppins } from "next/font/google";
import Typewriter from "typewriter-effect";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Home = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { md: "100vh", xs: "60vh" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
      <ReactPlayer
        url="/4.mp4"
        playing={true}
        loop
        muted
        playsinline
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          opacity: 0.5,
          transform: "scale(1.2)", // Zoom in effect
          objectFit: "cover", // Make sure the video covers the container
        }}
      />

      {/* Content */}
      <Typography
        variant="h2"
        component="h1"
        className={poppins.className}
        sx={{
          fontSize: {
            md: "90px",
            xs: "40px",
          }, // Adjusted responsive font size
          fontWeight: "bold",
          color: "#ffff",
          textAlign: "center",
          marginBottom: { xs: "1.5rem", sm: "2rem", md: "3rem" },
        }}
      >
        <Typewriter
          options={{
            strings: [
              "Welcome to A.T.O.M Robotics",
              "Innovate. Create. Automate.",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: { xs: "1rem", sm: "1.5rem", md: "2rem" },
          marginTop: "2rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Button
          className="button"
          sx={{
            color: "white",
            borderRadius: "20px",
            fontWeight: "bold",
            padding: {
              xs: "0.5rem 1rem",
              sm: "0.5rem 1.25rem",
              md: "0.5rem 1.5rem",
            },
          }}
          href="https://lnk.bio/A.T.O.M"
        >
          Contact Us
        </Button>
        <Button
          className="button"
          sx={{
            color: "white",
            borderRadius: "20px",
            fontWeight: "bold",
            padding: {
              xs: "0.5rem 1rem",
              sm: "0.5rem 1.25rem",
              md: "0.5rem 1.5rem",
            },
          }}
          href="https://atom-robotics-lab.github.io/wiki/"
        >
          Selection Task
        </Button>
      </Box>

      <style jsx>{`
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 90%;
          }
        }

        @keyframes blink-caret {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: #001ea5;
          }
        }
      `}</style>
    </Box>
  );
};

export default Home;
