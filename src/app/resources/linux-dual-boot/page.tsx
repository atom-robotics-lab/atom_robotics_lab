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
  HardDrive,
  Laptop,
  Usb,
} from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const steps = [
  {
    title: "Create a bootable Linux USB drive",
    description:
      "Download an Ubuntu ISO, insert a USB drive of at least 8 GB, and open Rufus on Windows. Select the USB drive, choose the ISO, keep the recommended UEFI and GPT settings, and click Start. Everything on the USB drive will be erased.",
    icon: Usb,
    actions: [
      {
        href: "https://releases.ubuntu.com/noble/",
        label: "Download Ubuntu",
      },
      {
        href: "https://rufus.ie/",
        label: "Download Rufus",
      },
    ],
  },
  {
    title: "Boot the laptop using the USB drive",
    description:
      "Back up important files and turn off BitLocker encryption before continuing. In Windows, open Manage BitLocker, select your Windows drive, and choose Turn off BitLocker. Wait for decryption to finish, then restart the laptop with the USB connected. Open the one-time boot menu using the key shown by your manufacturer, commonly F12, F9, Esc, or F2, then select the UEFI entry for your USB drive.",
    icon: Laptop,
  },
  {
    title: "Start Linux and fill in the installer details",
    description:
      "Choose Try or Install Ubuntu, then select your language, keyboard layout, internet connection, and timezone when prompted. For a normal desktop installation, keep the default options unless you know you need a minimal installation.",
    icon: CheckCircle2,
  },
  {
    title: "Create or select space for Linux",
    description:
      "When the installer asks where to install Ubuntu, choose Install Ubuntu alongside Windows. This option automatically creates the needed Linux partition in available space. If you use manual partitioning instead, select only unallocated space and never format or delete Windows or EFI partitions. At least 25 GB is recommended for Linux, with more space for robotics tools.",
    icon: HardDrive,
  },
  {
    title: "Select Install alongside Windows and continue",
    description:
      "Review the disk changes shown by the installer, set the amount of space you want Linux to use if prompted, and confirm the installation. Create your Linux username and password, then wait for the installation to finish. Do not turn off the laptop during this step.",
    icon: CheckCircle2,
  },
  {
    title: "Restart and test Windows and Linux",
    description:
      "Remove the USB when the installer asks you to restart. The boot menu should let you choose Linux or Windows. Start both operating systems once, confirm your files are present, and install updates before adding development tools.",
    icon: Laptop,
  },
];

const highlights = [
  "Windows and Linux can share one laptop without replacing either system",
  "A useful setup for programming, robotics development, and ROS tools",
  "A backup and Windows recovery drive keep the process reversible",
];

const LinuxDualBootPage = () => (
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
          label="Linux Guide"
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
          Dual Boot Linux
          <br />
          with Windows
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
          Install Linux alongside Windows so you can choose the operating
          system you need when your laptop starts. This guide uses Ubuntu as
          an example.
        </Typography>
        <Button
          component="a"
          href="https://ubuntu.com/tutorials/install-ubuntu-desktop"
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
          Official Ubuntu Tutorial
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
        Partitioning can cause data loss if the wrong disk or partition is
        selected. Back up your files first, turn off BitLocker encryption,
        and stop if you are unsure which partition belongs to Windows.
      </Alert>

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
          sx={{ color: "#f8fafc", fontWeight: 600, fontSize: "1.1rem", mb: 2 }}
        >
          Before you begin
        </Typography>
        <Stack spacing={1.1}>
          {highlights.map((item) => (
            <Box key={item} sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
              <CheckCircle2 size={18} color="#60a5fa" style={{ marginTop: 3, flexShrink: 0 }} />
              <Typography sx={{ color: "#cbd5e1", lineHeight: 1.7, fontSize: "0.95rem" }}>
                {item}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Paper>

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
                </Box>
              </Box>
            </Box>
          );
        })}
      </Stack>

      <Divider sx={{ borderColor: "rgba(148,163,184,0.15)", my: 6 }} />

      <Paper
        elevation={0}
        sx={{
          background:
            "linear-gradient(145deg, rgba(15,23,42,0.95), rgba(15,23,42,0.72))",
          border: "1px solid rgba(96,165,250,0.16)",
          borderRadius: 3,
          p: { xs: 2.5, md: 3 },
        }}
      >
        <Typography
          className={poppins.className}
          sx={{
            color: "#f8fafc",
            fontWeight: 600,
            fontSize: "1.1rem",
            mb: 1,
          }}
        >
          See a video demonstration
        </Typography>
        <Typography sx={{ color: "#cbd5e1", lineHeight: 1.8, mb: 2.5 }}>
          Watch this video for a visual walkthrough of the Ubuntu dual-boot
          installation process.
        </Typography>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
            overflow: "hidden",
            borderRadius: 2,
            background: "#0f172a",
          }}
        >
          <Box
            component="iframe"
            src="https://www.youtube.com/embed/alFosqQ1ang"
            title="Ubuntu dual-boot installation demonstration"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
          />
        </Box>
        <Button
          component="a"
          href="https://youtu.be/alFosqQ1ang"
          target="_blank"
          rel="noreferrer"
          startIcon={<ExternalLink size={15} />}
          sx={{
            color: "#60a5fa",
            textTransform: "none",
            fontWeight: 600,
            px: 0,
            mt: 1.5,
            "&:hover": {
              background: "transparent",
              color: "#bfdbfe",
            },
          }}
        >
          Open video on YouTube
        </Button>
      </Paper>

    </Container>
  </Box>
);

export default LinuxDualBootPage;
