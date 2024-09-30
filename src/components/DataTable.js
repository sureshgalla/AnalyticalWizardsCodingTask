import {
  MenuItem,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useCallback, useEffect } from "react";
import data from "../data.json";
import { useDispatch, useSelector } from "react-redux";
import { setTableHeaders } from "../redux/actions";

const DataTable = () => {
  const dispatch = useDispatch();
  const { table_headers: tableHeaders, table_data: tableData } = useSelector(
    (state) => state.tableHeaders
  );
  const uniqueTypes = extractUniqueTypes(tableHeaders);
  const { table_headers, table_data } = data;

  const [selectedTypes, setSelectedTypes] = useState(
    tableHeaders.reduce(
      (acc, column, index) => ({ ...acc, [index]: column.type }),
      {}
    )
  );
  useEffect(() => {
    setSelectedTypes(
      tableHeaders.reduce(
        (acc, column, index) => ({ ...acc, [index]: column.type }),
        {}
      )
    );
  }, [tableHeaders]);
  useEffect(() => {
    dispatch(setTableHeaders({ table_headers, table_data }));
  }, [dispatch, table_headers, table_data]);

  const handleTypeChange = useCallback((event, index) => {
    setSelectedTypes((prevTypes) => ({
      ...prevTypes,
      [index]: event.target.value,
    }));
  }, []);

  return (
    <TableContainer
      sx={{ border: "1px solid #ccc", m: 3, width: "95%", maxHeight: "90%" }}
    >
      <Table>
        <TableHead sx={{ backgroundColor: "#f4f6fc" }}>
          <HeaderRow columns={tableHeaders} />
          <TypeSelectionRow
            columns={tableHeaders}
            selectedTypes={selectedTypes}
            uniqueTypes={uniqueTypes}
            handleTypeChange={handleTypeChange}
          />
        </TableHead>
        <TableBody>
          {tableData.map((row, rowIndex) => (
            <DataRow key={rowIndex} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const HeaderRow = ({ columns }) => (
  <TableRow>
    {columns.map((column, index) => (
      <TableCell
        key={index}
        style={{
          top: 27,
          border: "1px solid #ccc",
          padding: "8px",
        }}
      >
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>{column.name}</span>
          <DeleteIcon style={{ cursor: "pointer" }} />
        </Stack>
      </TableCell>
    ))}
  </TableRow>
);

const TypeSelectionRow = ({
  columns,
  selectedTypes,
  uniqueTypes,
  handleTypeChange,
}) => (
  <TableRow>
    {columns.map(({ name, type }, index) => (
      <TableCell
        key={name}
        sx={{
          border: "1px solid #ccc",
          minWidth: 100,
          padding: "8px",
          textAlign: "center",
        }}
      >
        <Select
          value={selectedTypes[index] || ""}
          onChange={(event) => handleTypeChange(event, index)}
          sx={{ width: "100%" }}
        >
          <MenuItem value={type}>{type}</MenuItem>
          {uniqueTypes
            .filter((availableType) => availableType !== type)
            .map((availableType) => (
              <MenuItem key={availableType} value={availableType}>
                {availableType}
              </MenuItem>
            ))}
        </Select>
      </TableCell>
    ))}
  </TableRow>
);

const DataRow = ({ row }) => (
  <TableRow>
    {row.map((cellData, cellIndex) => (
      <TableCell key={cellIndex} align="left" sx={{ border: "1px solid #ccc" }}>
        {cellData}
      </TableCell>
    ))}
  </TableRow>
);

const extractUniqueTypes = (headers) => {
  return [...new Set(headers.map(({ type }) => type))];
};

export default DataTable;
