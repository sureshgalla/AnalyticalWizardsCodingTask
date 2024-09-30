import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import GetAppIcon from "@mui/icons-material/GetApp";
import LinkIcon from "@mui/icons-material/Link";
import SaveIcon from "@mui/icons-material/Save";
import BuildIcon from "@mui/icons-material/Build";
import RestoreIcon from "@mui/icons-material/Restore";

const ActionIcon = ({ IconComponent, color }) => (
  <IconButton>
    <IconComponent sx={{ color }} />
  </IconButton>
);

export const WorkflowHeader = () => {
  return (
    <Box sx={{ backgroundColor: "#ffffff", marginTop: 2, p: 1.7, mr: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", padding: 1 }}>
        <Typography
          variant="h6"
          sx={{ marginRight: 2, fontWeight: 600, color: "#556cd6" }}
        >
          Workflow
        </Typography>

        <ActionIcon IconComponent={CancelIcon} color="#ff007f" />
        <ActionIcon IconComponent={GetAppIcon} color="#ff007f" />
        <ActionIcon IconComponent={LinkIcon} color="#ff007f" />
        <ActionIcon IconComponent={SaveIcon} color="#ff007f" />
        <ActionIcon IconComponent={BuildIcon} color="#ff007f" />
        <ActionIcon IconComponent={RestoreIcon} color="#ffaadf" />
      </Box>
    </Box>
  );
};
