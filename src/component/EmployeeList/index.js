import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Main } from "./styled";
import { deleteEmployee,getListEmployees } from "../../api_services/employee";
const EmployeeList = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const [modeEditItem, setModeEditItem] = useState("");
  const employees = useSelector((state) => state.employee.employeeList);
  useEffect(() => {
    getListEmployees();
  }, []);

  useEffect(()=> {
    setEmployeeList(employees);
  }, [employees])

  const deleteUser = (item) => {
    deleteEmployee(item);
  };

 

  return (
    <Main>
      <IconButton color="primary" className="add-icon" component="label">
        <Link to="/employee/add">
          <AddCircleOutlineIcon />{" "}
        </Link>
      </IconButton>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First name</TableCell>
              <TableCell>Last name</TableCell>
              <TableCell>Email address</TableCell>
              <TableCell>Phone number</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employeeList.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.sex}</TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    className="add-icon"
                    component="label"
                  >
                    <Link to={`employee/edit/${row.id}`}>
                      <BorderColorIcon
                        fontSize="small"
                        id="edit-user-icon"
                        htmlColor="#1976d2"
                        className="icon-action"
                      />
                    </Link>
                  </IconButton>
                  <RestoreFromTrashIcon
                    id={`delete-user-icon_${row.id}`}
                    fontSize="small"
                    onClick={() => deleteUser(row)}
                    htmlColor="rgb(235, 0, 20)"
                    className="icon-action"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Main>
  );
};

export default EmployeeList;
