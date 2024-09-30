import React from "react";
import { Box, Stack } from "@mui/material";
import { TableHeader } from "./TableHeader";
import DataTable from "./DataTable";

export default function Table() {
  return (
    <Stack sx={{ m: 3, height: "82vh" }}>
      <TableHeader />
      <Box sx={{ background: "#ffffff", marginTop: "2px", height: "90%" }}>
        <DataTable />
      </Box>
    </Stack>
  );
}
