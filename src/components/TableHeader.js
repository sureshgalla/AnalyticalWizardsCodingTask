import React from "react";
import { Button, Typography, Box } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import StorageIcon from "@mui/icons-material/Storage";
import data from "../data.json";

const IconButton = ({ icon, label, sx }) => (
  <Button
    variant="outlined"
    startIcon={icon}
    sx={{
      textTransform: "none",
      borderRadius: 20,
      borderColor: "#d0b3ff",
      color: "#9068e8",
      marginRight: 1,
      padding: "6px 12px",
      ...sx,
    }}
  >
    <Typography variant="body2" sx={{ fontWeight: 600 }}>
      {label}
    </Typography>
  </Button>
);

const Label = ({ title }) => (
  <Typography variant="body1" sx={{ fontWeight: 600, marginRight: 2 }}>
    {title}
  </Typography>
);

export const TableHeader = () => {
  const { project_name, output_name, row_count, last_run } = data;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        background: "#ffffff",
        p: 3,
      }}
    >
      <IconButton icon={<SettingsIcon />} label="PROJECT NAME" />

      <Label title={project_name} />

      <IconButton icon={<StorageIcon />} label="OUTPUT DATASET NAME" />

      <Label title={output_name} />

      <IconButton label="LAST RUN" sx={{ marginRight: 0 }} />

      <Label title={new Date(last_run).toDateString()} />

      <Label title={`Rows: ${row_count}`} />
    </Box>
  );
};
