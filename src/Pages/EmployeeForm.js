import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { 
    Container, 
    TextField, 
    MenuItem, 
    Button, 
    Typography, 
    Grid, 
    Alert 
} from '@mui/material';

const EmployeeForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        employeeID: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        position: '',
        department: '',
        hireDate: '',
        salary: '',
        email: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
    });

    const [error, setError] = useState('');

    useEffect(() => {
        if (id && id !== 'new') {
            fetchEmployee(id);
        }
    }, [id]);

    const fetchEmployee = async (employeeId) => {
        try {
            const response = await axios.get(`https://localhost:7028/api/Employee/${employeeId}`);
            setEmployee(response.data);
        } catch (error) {
            console.error('Error fetching employee:', error);
            setError('Failed to fetch employee data');
        }
    };

    // Sample data for dropdowns (replace with your actual data or API calls)
    const departments = ['HR', 'IT', 'Finance', 'Marketing', 'Sales'];
    const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
    const countries = ['USA', 'Canada', 'UK', 'Australia', 'Germany'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const validate = () => {
        let errorMessage = '';
    
        if(employee.employeeID=='')
        {
            errorMessage = 'Employee Id is required';

        }
        // First Name validation
        if (employee.firstName.trim() === '') {
            errorMessage = 'First Name is required';
        }
    
        // Last Name validation
        else if (employee.lastName.trim() === '') {
            errorMessage = 'Last Name is required';
        }
    
        // Position validation
        else if (employee.position.trim() === '') {
            errorMessage = 'Position is required';
        }
    
        // Department validation
        else if (employee.department.trim() === '') {
            errorMessage = 'Department is required';
        }
    
        // Phone Number validation
        else if (!/^\d{10}$/.test(employee.phoneNumber)) {
            errorMessage = 'Phone number must be 10 digits';
        }
    
        // Email validation
        else if (!/\S+@\S+\.\S+/.test(employee.email)) {
            errorMessage = 'Email is not valid';
        }
    
        // City validation
        else if (employee.city.trim() === '') {
            errorMessage = 'City is required';
        }
    
        if (errorMessage) {
            setError(errorMessage);
            return false;
        }
    
        setError('');
        return true;
    };
    

    const submitEmployee = async () => {
        try {
            if (id && id !== 'new') {
                // Update existing employee
                await axios.post('https://localhost:7028/api/Employee', employee);
            } else {
                // Create new employee
                await axios.post('https://localhost:7028/api/Employee', employee);
            }
            alert('Employee details submitted successfully');
            navigate('/'); // Navigate back to the list after submission
        } catch (err) {
            setError('Failed to submit employee data');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            submitEmployee();
        }
    };

    return (
        <Container maxWidth="md" style={{ marginTop: '20px' }}>
            <Typography variant="h4" gutterBottom>
                {id && id !== 'new' ? 'Edit Employee' : 'Add New Employee'}
            </Typography>
            {error && <Alert severity="error">{error}</Alert>}
            
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    
                        <Grid item xs={12} md={3}>
                            <TextField
                                fullWidth
                                label="Employee Id"
                                name="employeeID"
                                value={employee.employeeID}
                                onChange={handleChange}
                                margin="normal"
                                required
                            />
                        </Grid>
                    
                    <Grid item xs={12} md={3}>
                        <TextField
                            fullWidth
                            label="First Name"
                            name="firstName"
                            value={employee.firstName}
                            onChange={handleChange}
                            margin="normal"
                            
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            fullWidth
                            label="Last Name"
                            name="lastName"
                            value={employee.lastName}
                            onChange={handleChange}
                            margin="normal"
                            
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            fullWidth
                            type="date"
                            label="Date of Birth"
                            name="dateOfBirth"
                            value={employee.dateOfBirth.substring(0, 10)}
                            onChange={handleChange}
                            margin="normal"
                            InputLabelProps={{ shrink: true }}
    
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            fullWidth
                            select
                            label="Gender"
                            name="gender"
                            value={employee.gender}
                            onChange={handleChange}
                            margin="normal"
                            
                        >
                            <MenuItem value="">Select Gender</MenuItem>
                            <MenuItem value="Male">Male</MenuItem>
                            <MenuItem value="Female">Female</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            fullWidth
                            label="Position"
                            name="position"
                            value={employee.position}
                            onChange={handleChange}
                            margin="normal"
                            
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            fullWidth
                            select
                            label="Department"
                            name="department"
                            value={employee.department}
                            onChange={handleChange}
                            margin="normal"
                            
                        >
                            <MenuItem value="">Select Department</MenuItem>
                            {departments.map((dept) => (
                                <MenuItem key={dept} value={dept}>{dept}</MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            fullWidth
                            type="date"
                            label="Hire Date"
                            name="hireDate"
                            value={employee.hireDate.substring(0, 10)}
                            onChange={handleChange}
                            margin="normal"
                            InputLabelProps={{ shrink: true }}
                            
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            fullWidth
                            type="number"
                            label="Salary"
                            name="salary"
                            value={employee.salary}
                            onChange={handleChange}
                            margin="normal"
                            
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            fullWidth
                            type="email"
                            label="Email"
                            name="email"
                            value={employee.email}
                            onChange={handleChange}
                            margin="normal"
                            
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            fullWidth
                            type="tel"
                            label="Phone Number"
                            name="phoneNumber"
                            value={employee.phoneNumber}
                            onChange={handleChange}
                            margin="normal"
                            
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            fullWidth
                            label="Address"
                            name="address"
                            value={employee.address}
                            onChange={handleChange}
                            margin="normal"
                            
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            fullWidth
                            select
                            label="City"
                            name="city"
                            value={employee.city}
                            onChange={handleChange}
                            margin="normal"
                            
                        >
                            <MenuItem value="">Select City</MenuItem>
                            {cities.map((city) => (
                                <MenuItem key={city} value={city}>{city}</MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            fullWidth
                            label="State"
                            name="state"
                            value={employee.state}
                            onChange={handleChange}
                            margin="normal"
                            
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            fullWidth
                            label="Postal Code"
                            name="postalCode"
                            value={employee.postalCode}
                            onChange={handleChange}
                            margin="normal"
                            
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            fullWidth
                            select
                            label="Country"
                            name="country"
                            value={employee.country}
                            onChange={handleChange}
                            margin="normal"
                            
                        >
                            <MenuItem value="">Select Country</MenuItem>
                            {countries.map((country) => (
                                <MenuItem key={country} value={country}>{country}</MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>
                <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px', marginRight: '10px' }}>
                    {id && id !== 'new' ? 'Update' : 'Submit'}
                </Button>
                <Button variant="contained" color="secondary" onClick={() => navigate('/')} style={{ marginTop: '20px' }}>
                    Cancel
                </Button>
            </form>
        </Container>
    );
};

export default EmployeeForm;