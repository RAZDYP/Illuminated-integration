import React, { useEffect, useState, useRef } from "react";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Avatar1Icon from "/images/table/Avatar-1.png";
import LinearProgress from "@mui/material/LinearProgress";
import { Box } from "@mui/system";

interface DisplayTableRows {
  id: number;
  model: string;
  description: string;
  manufacturer: string;
  source: string;
  variant: string;
  category: string;
  tags: (string | number)[];
  onHand: number;
  onOrder: number;
  allocated: number;
  available: number;
}
export default function DataTable() {
  const [page, setPage] = useState(1);
  const tableScrollDivRef = useRef<HTMLDivElement>(null);
  const [rows, setRows] = useState<DisplayTableRows[]>([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(
      `http://localhost:8000/data?_limit=13&_page=${page}`
    );
    const data = await response.json();
    console.log("This is the data", data);
    setRows((prev) => [...prev, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const handelInfiniteScroll = async () => {
    try {
      if (tableScrollDivRef.current) {
        const tableHeight =
          tableScrollDivRef.current.getBoundingClientRect().height;
        const tableScrollTop = tableScrollDivRef.current.scrollTop;
        const tableScrollHeight = tableScrollDivRef.current.scrollHeight;
        // console.log("Height:", tableHeight);
        // console.log("Scroll Top:", tableScrollTop);
        // console.log("Scroll Height:", tableScrollHeight);
        if (tableHeight + tableScrollTop + 1 >= tableScrollHeight) {
          setPage((prev) => prev + 1);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (tableScrollDivRef.current) {
      tableScrollDivRef.current.addEventListener(
        "scroll",
        handelInfiniteScroll
      );
    }
    return () => {
      if (tableScrollDivRef.current) {
        tableScrollDivRef.current.removeEventListener(
          "scroll",
          handelInfiniteScroll
        );
      }
    };
  }, []);

  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const handleSelectSingleRow = (id: number) => {
    const selectedIndex = selectedRows.indexOf(id);
    let newSelected: number[] = [];
    if (selectedIndex === -1) {
      newSelected = [...selectedRows, id];
    } else if (selectedIndex === 0) {
      newSelected = selectedRows.slice(1);
    } else if (selectedIndex === selectedRows.length - 1) {
      newSelected = selectedRows.slice(0, -1);
    } else if (selectedIndex > 0) {
      newSelected = [
        ...selectedRows.slice(0, selectedIndex),
        ...selectedRows.slice(selectedIndex + 1),
      ];
    }
    setSelectedRows(newSelected);
  };

  const handleSelectAllRow = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((row) => row.id);
      setSelectedRows(newSelecteds);
      return;
    }
    setSelectedRows([]);
  };

  return (
    <>
      <div style={{ marginTop: "32px" }}></div>

      <Paper
        sx={{
          width: "100%",
          overflow: "hidden",
          border: "1px solid #d0d5dd",
          borderRadius: "8px",
          boxShadow: "none",
        }}
      >
        {loading ? (
          <LinearProgress
            color="secondary"
            style={{
              borderTopRightRadius: "8px",
              borderBottomRightRadius: "8px",
            }}
            sx={{ height: "8px" }}
          />
        ) : null}

        <TableContainer
          className="table-scroll"
          component={Paper}
          ref={tableScrollDivRef}
        >
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow hover={true}>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="secondary"
                    size="medium"
                    indeterminate={
                      selectedRows.length > 0 &&
                      selectedRows.length < rows.length
                    }
                    checked={selectedRows.length === rows.length}
                    onChange={handleSelectAllRow}
                  />
                </TableCell>
                <TableCell align="left">
                  <p className="font-style-inter ">Model</p>
                </TableCell>
                <TableCell align="left">
                  <p className="font-style-inter">Description</p>
                </TableCell>
                <TableCell align="left">
                  <p className="font-style-inter">Manufacturer</p>
                </TableCell>
                <TableCell align="left">
                  <p className="font-style-inter">Source</p>
                </TableCell>
                <TableCell align="left">
                  <p className="font-style-inter">Variant</p>
                </TableCell>
                <TableCell align="left">
                  <p className="font-style-inter">Category</p>
                </TableCell>
                <TableCell align="left">
                  <p className="font-style-inter">Tags</p>
                </TableCell>
                <TableCell align="left">
                  <p className="font-style-inter">On hand</p>
                </TableCell>
                <TableCell align="left">
                  <p className="font-style-inter">On order</p>
                </TableCell>
                <TableCell align="left">
                  <p className="font-style-inter">Allocated</p>
                </TableCell>
                <TableCell align="left">
                  <p className="font-style-inter">Available</p>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  hover={true}
                  key={row.id}
                  selected={selectedRows.indexOf(row.id) !== -1}
                  onClick={() => handleSelectSingleRow(row.id)}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    backgroundColor:
                      selectedRows.indexOf(row.id) !== -1
                        ? "lightblue"
                        : "inherit",
                  }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      size="medium"
                      color="secondary"
                      checked={selectedRows.indexOf(row.id) !== -1}
                      onChange={() => handleSelectSingleRow(row.id)}
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <img src={Avatar1Icon} alt="Avatar 1 Icon" />
                      <p className="font-style-inter">{row.model}</p>
                    </Box>
                  </TableCell>

                  <TableCell align="left">
                    <p className="font-style-inter">{row.description}</p>
                  </TableCell>
                  <TableCell align="left">
                    <p className="font-style-inter">{row.manufacturer}</p>
                  </TableCell>
                  <TableCell align="left">
                    <p className="font-style-inter">{row.source}</p>
                  </TableCell>
                  <TableCell align="left">
                    <p className="font-style-inter">{row.variant}</p>
                  </TableCell>
                  <TableCell align="left">
                    <p className="font-style-inter">{row.category}</p>
                  </TableCell>
                  <TableCell align="left">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <p className="table-badge-orange m-0">{row.tags[0]}</p>
                      <p className="table-badge-blue m-0">{row.tags[1]}</p>
                      <p className="table-badge-navy-blue m-0">{row.tags[2]}</p>
                      <p className="table-badge-navy-gray">{row.tags[3]}</p>
                    </Box>
                  </TableCell>
                  <TableCell align="left">
                    <p className="font-style-inter">{row.onHand}</p>
                  </TableCell>
                  <TableCell align="left">
                    <p className="font-style-inter">{row.onOrder}</p>
                  </TableCell>
                  <TableCell align="left">
                    <p className="font-style-inter">{row.allocated}</p>
                  </TableCell>
                  <TableCell align="left">
                    <p className="font-style-inter">{row.available}</p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}
