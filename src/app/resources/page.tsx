"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { Poppins } from "next/font/google";
import {
  BookOpen,
  ChevronRight,
  Layers3,
  Terminal,
  Cable,
} from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const resources = [
  {
    id: "fusion-360",
    href: "/resources/fusion-360",
    title: "Getting Fusion 360 Education Edition",
    description:
      "A step-by-step guide for students to access Autodesk Fusion 360 Education, verify their student eligibility, and download the software.",
    category: "CAD",
    icon: Layers3,
    status: "Beginner",
  },
  {
    id: "linux-dual-boot",
    href: "/resources/linux-dual-boot",
    title: "Dual Boot Linux with Windows",
    description:
      "A practical guide to preparing your laptop, creating a bootable USB, and installing Linux alongside Windows.",
    category: "Linux",
    icon: Terminal,
    status: "Intermediate",
  },
  {
    id: "KiCAD Starter Guide",
    href: "/resources/kicad-guide",
    title: "Setup KiCAD on Ubuntu 24.04",
    description:
      "A starter guide to set up KiCAD on Ubuntu 24.04 and start making your first prototype PCB.",
    category: "Electronics",
    icon: Cable,
    status: "Beginner",
  },
];

const categories = [
  {
    id: "all",
    label: "All Resources",
  },
  {
    id: "CAD",
    label: "CAD",
  },
  {
    id: "Linux",
    label: "Linux",
  },
  {
    id: "Electronics",
    label: "Electronics",
  },
  // Future:
  // { id: "electronics", label: "Electronics" },
  // { id: "ros", label: "ROS & Robotics" },
];

const ResourcesPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredResources =
    activeCategory === "all"
      ? resources
      : resources.filter(
          (resource) => resource.category === activeCategory
        );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 15% 0%, rgba(59,130,246,0.20), transparent 32%), radial-gradient(circle at 90% 20%, rgba(37,99,235,0.12), transparent 30%), #020617",
        color: "white",
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 14 },
      }}
    >
      <Container maxWidth="lg">
        {/* Hero */}
        <Box sx={{ mb: { xs: 5, md: 7 } }}>
          <Chip
            icon={<BookOpen size={16} />}
            label="ATOM Robotics Lab"
            sx={{
              background: "rgba(59,130,246,0.12)",
              color: "#bfdbfe",
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
              fontSize: {
                xs: "2.7rem",
                sm: "3.5rem",
                md: "4.5rem",
              },
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              mb: 2,
            }}
          >
            Resources
          </Typography>

          <Typography
            sx={{
              maxWidth: 680,
              color: "#94a3b8",
              fontSize: { xs: "1rem", md: "1.08rem" },
              lineHeight: 1.8,
            }}
          >
            Guides and documentation to help students get started with
            the tools and technologies used in our robotics projects.
          </Typography>
        </Box>

        {/* Main content */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "190px 1fr",
            },
            gap: { xs: 4, md: 6 },
            alignItems: "start",
          }}
        >
          {/* Sidebar */}
          <Box
            sx={{
              position: { md: "sticky" },
              top: { md: 100 },
            }}
          >
            <Typography
              className={poppins.className}
              sx={{
                color: "#64748b",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                mb: 1.5,
              }}
            >
              Resources
            </Typography>

            <Stack spacing={0.5}>
              {categories.map((category) => {
                const active = activeCategory === category.id;

                return (
                  <Button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    sx={{
                      justifyContent: "space-between",
                      textTransform: "none",
                      color: active ? "#f8fafc" : "#94a3b8",
                      background: active
                        ? "rgba(59,130,246,0.13)"
                        : "transparent",
                      borderLeft: active
                        ? "2px solid #60a5fa"
                        : "2px solid transparent",
                      borderRadius: "0 8px 8px 0",
                      px: 1.5,
                      py: 1,
                      fontWeight: active ? 600 : 500,
                      transition: "all 160ms ease",
                      "&:hover": {
                        background: "rgba(59,130,246,0.10)",
                        color: "#e2e8f0",
                      },
                    }}
                  >
                    {category.label}

                    {active && (
                      <ChevronRight size={15} />
                    )}
                  </Button>
                );
              })}
            </Stack>

            <Box
              sx={{
                mt: 4,
                pt: 3,
                borderTop: "1px solid rgba(148,163,184,0.12)",
              }}
            >
              <Typography
                sx={{
                  color: "#475569",
                  fontSize: "0.78rem",
                  lineHeight: 1.6,
                }}
              >
                More learning resources will be added here as the lab
                expands its documentation.
              </Typography>
            </Box>
          </Box>

          {/* Resource area */}
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                mb: 2.5,
              }}
            >
              <Box>
                <Typography
                  className={poppins.className}
                  sx={{
                    color: "#f8fafc",
                    fontWeight: 600,
                    fontSize: "1.3rem",
                  }}
                >
                  {activeCategory === "all"
                    ? "All Resources"
                    : activeCategory}
                </Typography>

                <Typography
                  sx={{
                    color: "#64748b",
                    fontSize: "0.88rem",
                    mt: 0.4,
                  }}
                >
                  {filteredResources.length}{" "}
                  {filteredResources.length === 1
                    ? "resource"
                    : "resources"}
                </Typography>
              </Box>
            </Box>

            {filteredResources.length > 0 ? (
              <Stack spacing={2}>
                {filteredResources.map((resource) => {
                  const Icon = resource.icon;

                  return (
                    <Card
                      key={resource.id}
                      sx={{
                        background:
                          "linear-gradient(145deg, rgba(15,23,42,0.95), rgba(15,23,42,0.68))",
                        border:
                          "1px solid rgba(96,165,250,0.16)",
                        borderRadius: 3,
                        boxShadow: "none",
                        transition:
                          "transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease",
                        "&:hover": {
                          transform: "translateY(-3px)",
                          borderColor:
                            "rgba(96,165,250,0.4)",
                          boxShadow:
                            "0 18px 45px rgba(15,23,42,0.45)",
                        },
                      }}
                    >
                      <CardContent
                        sx={{
                          p: { xs: 2.5, md: 3.5 },
                          "&:last-child": {
                            pb: { xs: 2.5, md: 3.5 },
                          },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: {
                              xs: "column",
                              sm: "row",
                            },
                            gap: 2.5,
                          }}
                        >
                          {/* Icon */}
                          <Box
                            sx={{
                              width: 54,
                              height: 54,
                              minWidth: 54,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: 2.5,
                              background:
                                "rgba(59,130,246,0.10)",
                              border:
                                "1px solid rgba(96,165,250,0.2)",
                            }}
                          >
                            <Icon
                              size={26}
                              strokeWidth={1.7}
                              color="#60a5fa"
                            />
                          </Box>

                          {/* Content */}
                          <Box sx={{ flex: 1 }}>
                            <Box
                              sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 1,
                                alignItems: "center",
                                mb: 1,
                              }}
                            >
                              <Chip
                                label={resource.category}
                                size="small"
                                sx={{
                                  height: 24,
                                  background:
                                    "rgba(59,130,246,0.12)",
                                  color: "#93c5fd",
                                  border:
                                    "1px solid rgba(96,165,250,0.2)",
                                  fontSize: "0.7rem",
                                  fontWeight: 600,
                                }}
                              />

                              <Chip
                                label={resource.status}
                                size="small"
                                sx={{
                                  height: 24,
                                  background:
                                    "rgba(148,163,184,0.08)",
                                  color: "#94a3b8",
                                  border:
                                    "1px solid rgba(148,163,184,0.12)",
                                  fontSize: "0.7rem",
                                }}
                              />
                            </Box>

                            <Typography
                              className={poppins.className}
                              sx={{
                                color: "#f8fafc",
                                fontWeight: 600,
                                fontSize: {
                                  xs: "1.15rem",
                                  md: "1.3rem",
                                },
                                mb: 1,
                              }}
                            >
                              {resource.title}
                            </Typography>

                            <Typography
                              sx={{
                                color: "#94a3b8",
                                fontSize: "0.92rem",
                                lineHeight: 1.75,
                                maxWidth: 720,
                              }}
                            >
                              {resource.description}
                            </Typography>

                            <Button
                              component={Link}
                              href={resource.href}
                              endIcon={<ChevronRight size={16} />}
                              sx={{
                                mt: 2,
                                px: 0,
                                color: "#60a5fa",
                                textTransform: "none",
                                fontWeight: 600,
                                "&:hover": {
                                  background: "transparent",
                                  color: "#bfdbfe",
                                },
                              }}
                            >
                              Open guide
                            </Button>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  );
                })}
              </Stack>
            ) : (
              <Box
                sx={{
                  border: "1px dashed rgba(148,163,184,0.2)",
                  borderRadius: 3,
                  p: 5,
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#64748b",
                    fontSize: "0.95rem",
                  }}
                >
                  No resources have been added to this category yet.
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ResourcesPage;