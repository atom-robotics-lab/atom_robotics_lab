"use client";

import React from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Poppins } from "next/font/google";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  Globe,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const steps = [
  {
    number: "01",
    title: "Sign in or create an Autodesk account",
    description:
      "Sign in with your existing Autodesk account or create a new one. Use your college email address where appropriate. If a college email is not available, you can use your personal email address.",
    action:
      "https://www.autodesk.com/in/products/fusion-360/overview",
    actionLabel: "Open Autodesk Fusion",
    note: "If you already have an Autodesk account, sign in. Otherwise, create one and continue.",
  },
  {
    number: "02",
    title: "Open Autodesk Education",
    description:
      "Open the Autodesk Education portal and access the education offerings available to students.",
    action:
      "https://www.autodesk.com/education/edu-software/overview",
    actionLabel: "Open Autodesk Education",
    image: "/guides/fusion-360/02-autodesk-education.png",
    imageAlt: "Autodesk Education portal",
    note: "Open the Autodesk Education portal and select Fusion.",
  },
  {
    number: "03",
    title: "Choose the student option",
    description:
      "Select the option intended for students and continue through the education access process.",
    image: "/guides/fusion-360/03-student-access.png",
    imageAlt: "Autodesk student education access",
    note: "Select the student or education option shown on the Autodesk website.",
  },
  {
    number: "04",
    title: "Verify your student status",
    description:
      "Follow the verification process shown by Autodesk. For verification documents, keep the required college ID if available else if one is not available try with either college fee reciept or offer letter.",
    note: "Complete the student verification process shown on the Autodesk website.",
  },
  {
    number: "05",
    title: "Find Fusion 360",
    description:
      "After completing the education access process, find Fusion 360 in the available Autodesk software and continue to the download option.",
    image: "/guides/fusion-360/05-fusion-download.png",
    imageAlt: "Fusion 360 download page",
    action:"https://manage.autodesk.com/products",
    actionLabel: "Find product after verification",
    note: "Locate Fusion 360 and select the appropriate download option for your operating system.",
  },
  {
    number: "06",
    title: "Download and install",
    description:
      "Download the installer, run it on your computer, and complete the installation. Once installed, launch Fusion 360 and sign in with your Autodesk account.",
    note: "Make sure you have a stable internet connection and free space of around 8GB in your 'C:\' drive",
  },
];

const guideHighlights = [
  "Useful for 3D modeling and mechanical design",
  "Great for robot parts, mounts, enclosures, and assemblies",
  "Suitable for learning CAD before fabrication or 3D printing",
];

const Fusion360GuidePage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 20% 0%, rgba(59,130,246,0.17), transparent 30%), radial-gradient(circle at 90% 30%, rgba(37,99,235,0.08), transparent 30%), #020617",
        color: "white",
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 14 },
      }}
    >
      <Container maxWidth="md">
        {/* Back */}
        <Button
          component={Link}
          href="/resources"
          startIcon={<ArrowLeft size={16} />}
          sx={{
            color: "#bfdbfe",
            textTransform: "none",
            fontWeight: 600,
            mb: 3,
            px: 0,
            "&:hover": {
              background: "transparent",
              color: "#e0f2fe",
            },
          }}
        >
          Back to Resources
        </Button>

        {/* Header */}
        <Box sx={{ mb: 5 }}>
          <Chip
            icon={<BookOpen size={16} />}
            label="CAD Guide"
            sx={{
              background: "rgba(59,130,246,0.12)",
              color: "#dbeafe",
              border: "1px solid rgba(96,165,250,0.3)",
              fontWeight: 600,
              mb: 2.5,
              "& .MuiChip-icon": {
                color: "#60a5fa",
              },
            }}
          />

          <Typography
            className={poppins.className}
            component="h1"
            sx={{
              color: "#f8fafc",
              fontWeight: 700,
              fontSize: { xs: "2.4rem", md: "3.6rem" },
              lineHeight: 1.08,
              letterSpacing: "-0.04em",
              mb: 1.5,
            }}
          >
            Fusion 360
            <br />
            Education Edition
          </Typography>

          <Typography
            sx={{
              color: "#cbd5e1",
              fontSize: { xs: "1rem", md: "1.08rem" },
              lineHeight: 1.8,
              maxWidth: 760,
              mb: 3,
            }}
          >
            A step-by-step guide for ATOM members to access Autodesk Fusion
            360 through the Autodesk Education program and get started with
            CAD for robotics.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
          >
            <Button
              component="a"
              href="https://www.autodesk.com/education/edu-software/overview"
              target="_blank"
              rel="noreferrer"
              startIcon={<Globe size={16} />}
              sx={{
                background:
                  "linear-gradient(90deg, #60a5fa, #2563eb)",
                color: "white",
                borderRadius: "999px",
                px: 2.5,
                py: 1,
                fontWeight: 700,
                textTransform: "none",
                boxShadow:
                  "0 10px 25px rgba(37,99,235,0.22)",
                "&:hover": {
                  background:
                    "linear-gradient(90deg, #93c5fd, #3b82f6)",
                },
              }}
            >
              Autodesk Education
            </Button>

            <Button
              component={Link}
              href="/resources"
              variant="outlined"
              sx={{
                borderColor: "rgba(96,165,250,0.35)",
                color: "#dbeafe",
                borderRadius: "999px",
                px: 2.5,
                py: 1,
                fontWeight: 600,
                textTransform: "none",
                "&:hover": {
                  borderColor: "rgba(96,165,250,0.6)",
                  background: "rgba(59,130,246,0.06)",
                },
              }}
            >
              All Resources
            </Button>
          </Stack>
        </Box>

        {/* Overview */}
        <Paper
          elevation={0}
          sx={{
            background:
              "linear-gradient(145deg, rgba(15,23,42,0.95), rgba(15,23,42,0.72))",
            border: "1px solid rgba(96,165,250,0.16)",
            borderRadius: 3,
            p: { xs: 2.5, md: 3 },
            mb: 5,
          }}
        >
          <Typography
            className={poppins.className}
            sx={{
              color: "#f8fafc",
              fontWeight: 600,
              fontSize: "1.1rem",
              mb: 2,
            }}
          >
            Why Fusion 360?
          </Typography>

          <Stack spacing={1.1}>
            {guideHighlights.map((item) => (
              <Box
                key={item}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1.2,
                }}
              >
                <CheckCircle2
                  size={18}
                  color="#60a5fa"
                  style={{ marginTop: 3, flexShrink: 0 }}
                />

                <Typography
                  sx={{
                    color: "#cbd5e1",
                    lineHeight: 1.7,
                    fontSize: "0.95rem",
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Paper>

        {/* Guide */}
        <Box>
          <Typography
            className={poppins.className}
            sx={{
              color: "#f8fafc",
              fontWeight: 700,
              fontSize: "1.6rem",
              mb: 0.7,
            }}
          >
            Step-by-step guide
          </Typography>

          <Typography
            sx={{
              color: "#64748b",
              fontSize: "0.9rem",
              mb: 3,
            }}
          >
            Follow the steps below and use the screenshots as a visual
            reference.
          </Typography>

          <Stack spacing={4}>
            {steps.map((step) => (
              <Box key={step.number}>
                {/* Step heading */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1.5,
                    mb: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      width: 34,
                      height: 34,
                      minWidth: 34,
                      borderRadius: "50%",
                      background:
                        "rgba(59,130,246,0.14)",
                      border:
                        "1px solid rgba(96,165,250,0.32)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#93c5fd",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      mt: 0.2,
                    }}
                  >
                    {step.number}
                  </Box>

                  <Box>
                    <Typography
                      className={poppins.className}
                      sx={{
                        color: "#f8fafc",
                        fontWeight: 600,
                        fontSize: {
                          xs: "1.05rem",
                          md: "1.15rem",
                        },
                        mb: 0.5,
                      }}
                    >
                      {step.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#94a3b8",
                        lineHeight: 1.75,
                        fontSize: "0.93rem",
                      }}
                    >
                      {step.description}
                    </Typography>
                  </Box>
                </Box>

                {/* Screenshot */}
                <Paper
                  elevation={0}
                  sx={{
                    ml: { xs: 0, sm: 5.5 },
                    mt: 2,
                    overflow: "hidden",
                    borderRadius: 2.5,
                    background: "#0f172a",
                    border:
                      "1px solid rgba(148,163,184,0.18)",
                  }}
                >
                  <Box
                    component="img"
                    src={step.image}
                    alt={step.imageAlt}
                    sx={{
                      display: "block",
                      width: "100%",
                      height: "auto",
                      maxHeight: 650,
                      objectFit: "contain",
                      background: "#0f172a",
                    }}
                  />
                </Paper>

                {/* Screenshot instruction */}
                <Box
                  sx={{
                    ml: { xs: 0, sm: 5.5 },
                    mt: 1.5,
                    px: 2,
                    py: 1.5,
                    borderLeft:
                      "2px solid rgba(96,165,250,0.45)",
                    background:
                      "rgba(59,130,246,0.05)",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#bfdbfe",
                      fontSize: "0.88rem",
                      lineHeight: 1.7,
                    }}
                  >
                    <strong>What to do:</strong>{" "}
                    {step.note}
                  </Typography>
                </Box>

                {/* External action */}
                {step.action && (
                  <Button
                    component="a"
                    href={step.action}
                    target="_blank"
                    rel="noreferrer"
                    startIcon={<ExternalLink size={15} />}
                    sx={{
                      ml: { xs: 0, sm: 5.5 },
                      mt: 1.5,
                      color: "#60a5fa",
                      textTransform: "none",
                      fontWeight: 600,
                      px: 0,
                      "&:hover": {
                        background: "transparent",
                        color: "#bfdbfe",
                      },
                    }}
                  >
                    {step.actionLabel}
                  </Button>
                )}
              </Box>
            ))}
          </Stack>
        </Box>

        <Divider
          sx={{
            borderColor: "rgba(148,163,184,0.15)",
            my: 6,
          }}
        />

        {/* Completion */}
        <Paper
          elevation={0}
          sx={{
            background:
              "linear-gradient(135deg, rgba(37,99,235,0.12), rgba(15,23,42,0.9))",
            border:
              "1px solid rgba(96,165,250,0.18)",
            borderRadius: 3,
            p: { xs: 2.5, md: 3.5 },
          }}
        >
          <Box sx={{ mt: 1 }}>
  <Typography
    className={poppins.className}
    sx={{
      color: "#f8fafc",
      fontWeight: 600,
      fontSize: "1.05rem",
      mb: 1,
    }}
  >
    Learn Fusion 360
  </Typography>

  <Typography
    sx={{
      color: "#cbd5e1",
      lineHeight: 1.8,
      mb: 2.5,
    }}
  >
    Once Fusion 360 is installed, these tutorials are a good starting
    point for learning the basics of CAD and getting comfortable with
    the Fusion 360 interface.
  </Typography>

  <Stack
    direction={{ xs: "column", sm: "row" }}
    spacing={1.5}
  >
    <Button
      component="a"
      href="https://www.youtube.com/watch?v=7lKpzGtoQX0"
      target="_blank"
      rel="noreferrer"
      startIcon={<ExternalLink size={16} />}
      sx={{
        justifyContent: "flex-start",
        color: "#dbeafe",
        background: "rgba(59,130,246,0.10)",
        border: "1px solid rgba(96,165,250,0.22)",
        borderRadius: 2,
        px: 2,
        py: 1.2,
        textTransform: "none",
        fontWeight: 600,
        "&:hover": {
          background: "rgba(59,130,246,0.18)",
          borderColor: "rgba(96,165,250,0.4)",
        },
      }}
    >
      Fusion 360 Tutorial 1
    </Button>

    <Button
      component="a"
      href="https://www.youtube.com/watch?v=gKGP1iFhd1s"
      target="_blank"
      rel="noreferrer"
      startIcon={<ExternalLink size={16} />}
      sx={{
        justifyContent: "flex-start",
        color: "#dbeafe",
        background: "rgba(59,130,246,0.10)",
        border: "1px solid rgba(96,165,250,0.22)",
        borderRadius: 2,
        px: 2,
        py: 1.2,
        textTransform: "none",
        fontWeight: 600,
        "&:hover": {
          background: "rgba(59,130,246,0.18)",
          borderColor: "rgba(96,165,250,0.4)",
        },
      }}
    >
      Fusion 360 Tutorial 2
    </Button>
  </Stack>
</Box>
        </Paper>

        <Box
          sx={{
            mt: 3,
            display: "flex",
            alignItems: "center",
            gap: 1.2,
          }}
        >
          <ShieldCheck size={18} color="#86efac" />

          <Typography
            sx={{
              color: "#94a3b8",
              fontSize: "0.88rem",
            }}
          >
            Guide maintained by ATOM Robotics Lab.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Fusion360GuidePage;