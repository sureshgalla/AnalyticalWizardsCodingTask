import React, { useState } from "react";
import { Toolbar, ButtonGroup, Button } from "@mui/material";
import DatasetIcon from "@mui/icons-material/Dataset";
import SummarizeIcon from "@mui/icons-material/Summarize";
import HistoryIcon from "@mui/icons-material/History";
import DownloadIcon from "@mui/icons-material/Download";

const NavigationBar = () => {
  const [activeButton, setActiveButton] = useState("data");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <Toolbar sx={{ justifyContent: "space-between" }}>
      <ButtonGroup variant="contained">
        <Button
          onClick={() => handleButtonClick("data")}
          startIcon={<DatasetIcon />}
          sx={{
            backgroundColor: activeButton === "data" ? "#2c0060" : "#FFFFFF",
            color: activeButton === "data" ? "#FFFFFF" : "#000000",
          }}
        >
          Data
        </Button>
        <Button
          onClick={() => handleButtonClick("summary")}
          startIcon={<SummarizeIcon />}
          sx={{
            backgroundColor: activeButton === "summary" ? "#2c0060" : "#FFFFFF",
            color: activeButton === "summary" ? "#FFFFFF" : "#000000",
          }}
        >
          Summary
        </Button>
        <Button
          onClick={() => handleButtonClick("logs")}
          startIcon={<HistoryIcon />}
          sx={{
            backgroundColor: activeButton === "logs" ? "#2c0060" : "#FFFFFF",
            color: activeButton === "logs" ? "#FFFFFF" : "#000000",
          }}
        >
          Logs
        </Button>
      </ButtonGroup>
      <Button
        onClick={() => handleButtonClick("download")}
        startIcon={<DownloadIcon />}
        sx={{
          backgroundColor: "#FFFFFF",
          color: "#cfcbe5",
        }}
      >
        Download
      </Button>
    </Toolbar>
  );
};

export default NavigationBar;
