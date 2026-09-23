"use client";

import { useState } from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";

const CodeBlock = ({ code }: { code: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <Box sx={{ position: "relative", mt: 2 }}>
      <Box
        component="pre"
        sx={{
          m: 0,
          p: 2,
          pr: 8,
          overflowX: "auto",
          borderRadius: 2,
          background: "#020617",
          border: "1px solid rgba(148,163,184,0.15)",
          color: "#cbd5e1",
          fontSize: "0.85rem",
        }}
      >
        <code>{code}</code>
      </Box>

      <Button
        onClick={copyToClipboard}
        size="small"
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          minWidth: "auto",
          color: "#93c5fd",
          background: "rgba(59,130,246,0.12)",
          textTransform: "none",
          fontSize: "0.75rem",
          "&:hover": {
            background: "rgba(59,130,246,0.22)",
          },
        }}
      >
        {isCopied ? "Copied!" : "Copy"}
      </Button>
    </Box>
  );
};

export default CodeBlock;
