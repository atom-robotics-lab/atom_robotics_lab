"use client";

import React from "react";
import Link from "next/link";
import {
  Alert,
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
  AlertTriangle,
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  CircuitBoard,
  Laptop,
  SquareTerminal,
} from "lucide-react";
import CodeBlock from "@/components/ui/CodeBlock";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface Step {
  title: string;
  description: string;
  icon: typeof Laptop;
  actions?: Array<{ href: string; label: string }>;
  terminal?: string;
  terminal1?: string;
  terminal2?: string;
  terminal3?: string;
  terminal4?: string;
}

const steps: Step[] = [
  {
    title: "Open the Linux Terminal",
    description:
      "Open the Linux terminal by searching in the desktop menu ( or pressing the keyboard shortcut 'Ctrl + Alt + T' ).",
    icon: Laptop,
  },
  {
    title: "Execute the following terminal commands in order.",
    description:
      "Always remember to update and upgrade your installation packages before executing new installations",
    icon: SquareTerminal,
    terminal: "True",
    terminal1: "sudo apt update && sudo apt upgrade -y",
    terminal2: "sudo add-apt-repository ppa:kicad/kicad-10.0-releases",
    terminal3: "sudo apt update",
    terminal4: "sudo apt install kicad",
  },
  {
    title: "Open KiCAD Project Manager",
    description:
      "After the installation completes in the terminal window, close the terminal and search for KiCAD Project Manager in your desktop menu.",
    icon: CircuitBoard,
  },
];

const KicadGuide = () => (
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
          "&:hover": { background: "transparent", color: "#e0f2fe" },
        }}
      >
        Back to Resources
      </Button>

      <Box sx={{ mb: 5 }}>
        <Chip
          icon={<BookOpen size={16} />}
          label="Electronics"
          sx={{
            background: "rgba(59,130,246,0.12)",
            color: "#dbeafe",
            border: "1px solid rgba(96,165,250,0.3)",
            fontWeight: 600,
            mb: 2.5,
            "& .MuiChip-icon": { color: "#60a5fa" },
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
          Setup KiCAD
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
          Setup KiCAD to start prototyping PCBs and start making your own hardware designs.
        </Typography>
        <Button
          component="a"
          href="https://www.kicad.org/download/"
          target="_blank"
          rel="noreferrer"
          startIcon={<ExternalLink size={16} />}
          sx={{
            background: "linear-gradient(90deg, #60a5fa, #2563eb)",
            color: "white",
            borderRadius: "999px",
            px: 2.5,
            py: 1,
            fontWeight: 700,
            textTransform: "none",
            "&:hover": {
              background: "linear-gradient(90deg, #93c5fd, #3b82f6)",
            },
          }}
        >
          Official KiCAD Installation Page
        </Button>
      </Box>

      <Alert
        icon={<AlertTriangle size={20} />}
        severity="warning"
        sx={{
          mb: 5,
          color: "#fde68a",
          background: "rgba(120,53,15,0.22)",
          border: "1px solid rgba(251,191,36,0.25)",
          "& .MuiAlert-icon": { color: "#fbbf24" },
        }}
      >
        Installing the AppImage through the official link will take extra setup steps for starting to use KiCAD.
      </Alert>

      <Typography className={poppins.className} sx={{ color: "#f8fafc", fontWeight: 700, fontSize: "1.6rem", mb: 0.7 }}>
        Step-by-step guide
      </Typography>
      <Typography sx={{ color: "#64748b", fontSize: "0.9rem", mb: 3 }}>
        Read each step before making changes to your laptop.
      </Typography>

      <Stack spacing={4}>
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <Box key={step.title}>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                <Box
                  sx={{
                    width: 34,
                    height: 34,
                    minWidth: 34,
                    borderRadius: "50%",
                    background: "rgba(59,130,246,0.14)",
                    border: "1px solid rgba(96,165,250,0.32)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#93c5fd",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    mt: 0.2,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </Box>
                <Box>
                  <Typography className={poppins.className} sx={{ color: "#f8fafc", fontWeight: 600, fontSize: { xs: "1.05rem", md: "1.15rem" }, mb: 0.5 }}>
                    <Icon size={17} color="#60a5fa" style={{ verticalAlign: "-3px", marginRight: 8 }} />
                    {step.title}
                  </Typography>
                  <Typography sx={{ color: "#94a3b8", lineHeight: 1.75, fontSize: "0.93rem" }}>
                    {step.description}
                  </Typography>
                  {step.actions && (
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 1 }}>
                      {step.actions.map((action) => (
                        <Button key={action.href} component="a" href={action.href} target="_blank" rel="noreferrer" startIcon={<ExternalLink size={15} />} sx={{ justifyContent: "flex-start", color: "#60a5fa", textTransform: "none", fontWeight: 600, px: 0, "&:hover": { background: "transparent", color: "#bfdbfe" } }}>
                          {action.label}
                        </Button>
                      ))}
                    </Stack>
                  )}
                  {step.terminal && (
                    <>
                      <CodeBlock code={step.terminal1!}/>
                      <CodeBlock code={step.terminal2!}/>
                      <CodeBlock code={step.terminal3!}/>
                      <CodeBlock code={step.terminal4!}/>
                    </>
                  )}
                </Box>
              </Box>
            </Box>
          );
        })}
      </Stack>

    </Container>
  </Box>
);

export default KicadGuide;
