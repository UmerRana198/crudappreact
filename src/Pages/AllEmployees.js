import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { 
    Container, 
    Typography, 
    Button,
    Box
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await axios.get('https://localhost:7028/api/Employee');
            setEmployees(response.data);
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };

    const handleEdit = (id) => {
        navigate(`/employee/${id}`);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this employee?')) {
            try {
                await axios.delete(`https://localhost:7028/api/Employee/${id}`);
                fetchEmployees(); // Refresh the list after deletion
            } catch (error) {
                console.error('Error deleting employee:', error);
            }
        }
    };

    const handleAddNew = () => {
        navigate('/employee/new');
    };

    const columns = [
        { field: 'employeeID', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First Name', width: 130 },
        { field: 'lastName', headerName: 'Last Name', width: 130 },
        { field: 'position', headerName: 'Position', width: 200 },
        { field: 'department', headerName: 'Department', width: 150 },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 120,
            renderCell: (params) => (
                <Box>
                    <EditIcon 
                        style={{ cursor: 'pointer', marginRight: 10 }} 
                        onClick={() => handleEdit(params.row.employeeID)}
                    />
                    <DeleteIcon 
                        style={{ cursor: 'pointer' }} 
                        onClick={() => handleDelete(params.row.employeeID)}
                    />
                </Box>
            ),
        },
    ];

    return (
        <Container maxWidth="lg" style={{ marginTop: '20px' }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h4">
                    Employee List
                </Typography>
                <Button 
                    variant="contained" 
                    color="primary" 
                    startIcon={<AddIcon />}
                    onClick={handleAddNew}
                >
                    Add New Employee
                </Button>
            </Box>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={employees}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    getRowId={(row) => row.employeeID}
                />
            </div>
        </Container>
    );
};

export default EmployeeList;