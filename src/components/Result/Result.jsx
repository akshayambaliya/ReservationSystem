import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Edit, DeleteForever } from "@mui/icons-material";

import "./Result.css";

export default function Result({
  items,
  handleSelecteDetails,
  onEdit,
  onDelete,
}) {
  
  return (
    <div className="resultContainer">
      <TableContainer sx={{ maxWidth: "100%" }} component={Paper}>
        <Table sx={{ maxWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell align="center">Last Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={() => handleSelecteDetails(index)}
                data-testid="table-row-id"
                style={{ cursor: 'pointer' }}
              >
                <TableCell align="center">{item.firstName}</TableCell>
                <TableCell align="center">{item.lastName}</TableCell>
                <TableCell align="center">{item.email}</TableCell>
                <TableCell align="center">{item.phone}</TableCell>
                <TableCell align="center">
                  <div className="actionWrapper">
                    <Edit onClick={(e) => onEdit(e, index)} />
                    <DeleteForever onClick={(e) => onDelete(e, item.id)} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
