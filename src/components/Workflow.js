import React, { useState, useEffect } from "react";
import { CardContent, Typography, Box, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { styled } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { setWorkflowSteps } from "../redux/actions";
import data from "../data.json";

const StyledCardHeader = styled(Box)(({ theme }) => ({
  backgroundColor: "#2c0060",
  padding: theme.spacing(1.5),
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  width: "250px",
  marginTop: "20px",
  color: "#ffffff",
}));

const StyledBoxContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  backgroundColor: "#f4f6fc",
  border: "1px solid #E0E0E0",
  borderRadius: "4px",
  width: "260px",
}));

const VerticalDottedLine = styled(Box)(({ theme }) => ({
  borderLeft: "2px dotted #E0E0E0",
  height: "100%",
  marginLeft: theme.spacing(2.5),
}));

const Workflow = ({ step, isExpanded, onExpandClick }) => {
  console.log("step", step);

  return (
    <>
      <Grid container alignItems="center" sx={{ marginLeft: 3 }}>
        <Grid item>
          <IconButton onClick={() => onExpandClick(step.name)}>
            {isExpanded ? <RemoveIcon /> : <AddIcon />}
          </IconButton>
        </Grid>
        <Grid item>
          <StyledCardHeader onClick={() => onExpandClick(step.name)}>
            <Typography variant="body1" fontWeight="bold">
              {step.name_title}
            </Typography>
          </StyledCardHeader>
        </Grid>
      </Grid>

      {isExpanded && (
        <Grid container sx={{ marginLeft: 3 }}>
          <Grid item>
            <VerticalDottedLine />
          </Grid>
          <Grid item>
            <CardContent
              sx={{ p: 0, marginLeft: 2, "&:last-child": { padding: 0 } }}
            >
              <StyledBoxContent>
                {renderParamsExtra(step.params_extra)}
              </StyledBoxContent>
            </CardContent>
          </Grid>
        </Grid>
      )}
    </>
  );
};

const renderParamsExtra = (paramsExtra) => {
  if (!paramsExtra || Object.keys(paramsExtra).length === 0) {
    return <Typography variant="body2">No additional parameters</Typography>;
  }

  return Object.entries(paramsExtra).map(([key, value]) => {
    if (Array.isArray(value)) {
      return (
        <Typography key={key} variant="body2">
          {key}: {value.join(", ")}
        </Typography>
      );
    }

    if (typeof value === "object" && value !== null) {
      return (
        <Typography key={key} variant="body2">
          {key}: {JSON.stringify(value, null, 2)}
        </Typography>
      );
    }

    return (
      <Typography key={key} variant="body2">
        {key}: {String(value)}
      </Typography>
    );
  });
};

export const WorkflowBody = () => {
  const dispatch = useDispatch();
  const workflowSteps = useSelector((state) => state.workflow.workflowSteps);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    dispatch(setWorkflowSteps(data.workflow_steps));
  }, [dispatch]);

  const handleExpandClick = (stepName) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [stepName]: !prevExpanded[stepName],
    }));
  };
  console.log("workflowSteps", workflowSteps);
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        marginTop: "2px",
        height: "80vh",
        overflowY: "auto",
        overflowX: "hidden",
        mr: 3,
      }}
    >
      {workflowSteps.map((step) => (
        <Workflow
          key={step.id}
          step={step}
          isExpanded={!!expanded[step.name]}
          onExpandClick={handleExpandClick}
        />
      ))}
    </Box>
  );
};
