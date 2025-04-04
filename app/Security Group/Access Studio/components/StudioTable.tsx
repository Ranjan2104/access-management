import React, { useState } from "react";
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Avatar,
    Chip,
    Paper,
    Link,
    Pagination,
    Grid,
    Card,
    CardContent,
    Button
} from "@mui/material";
import { users } from "../constants";

const getInitial = (email: string) => email.charAt(0).toUpperCase();

const getStatusChip = (status: string) => {
    switch (status) {
        case "Active":
            return <Chip label="Active" size="small" sx={{ bgcolor: "#e8f5e9", color: "#2e7d32" }} />;
        case "Pending":
            return <Chip label="Pending" size="small" sx={{ bgcolor: "#fff3e0", color: "#e65100" }} />;
        default:
            return <Chip label={status} size="small" />;
    }
};

const getStyledChip = (label: string) => (
    <Chip
        key={label}
        label={label}
        size="small"
        sx={{
            bgcolor: "#EDE7F6", // Light purple background
            color: "#6A1B9A", // Dark purple text
            fontWeight: 500,
        }}
    />
);

const UsersTable = ({ activentnprimay }: any) => {
    const [page, setPage] = useState(1);
    const rowsPerPage = 5;

    const handleChangePage = ({ e, newPage }: any) => {
        setPage(newPage);
    };

    const paginatedUsers = users.slice((page - 1) * rowsPerPage, page * rowsPerPage);

    return (
        <>
            {
                activentnprimay.list ?
                    <Box>
                        <TableContainer component={Paper} elevation={1} sx={{ borderRadius: 2, border: "1px solid #e0e0e0" }}>
                            <Table>
                                <TableHead sx={{ background: "linear-gradient(135deg, #f3e5f5, #e1bee7)" }}>
                                    <TableRow>
                                        <TableCell />
                                        <TableCell><strong>User</strong></TableCell>
                                        <TableCell><strong>Type</strong></TableCell>
                                        <TableCell><strong>Status</strong></TableCell>
                                        <TableCell><strong>Groups</strong></TableCell>
                                        <TableCell><strong>Roles</strong></TableCell>
                                        <TableCell><strong>Actions</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {paginatedUsers.map((user, index) => (
                                        <TableRow key={index} hover>
                                            <TableCell width={40}>
                                                <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#8e24aa", ml: 1 }} />

                                            </TableCell>
                                            <TableCell>
                                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                                    <Avatar
                                                        sx={{
                                                            width: 32,
                                                            height: 32,
                                                            fontWeight: "bold",
                                                            color: "#6A1B9A",
                                                            background: "linear-gradient(135deg, #F3E5F5, #E1BEE7)", // Light Purple Gradient
                                                        }}
                                                    >
                                                        {getInitial(user.email)}
                                                    </Avatar>
                                                    <Typography variant="body2">{user.email}</Typography>
                                                </Box>
                                            </TableCell>
                                            <TableCell>{user.type}</TableCell>
                                            <TableCell>{getStatusChip(user.status)}</TableCell>

                                            <TableCell>
                                                <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
                                                    {user.groups.map((group) => getStyledChip(group))}
                                                </Box>
                                            </TableCell>

                                            <TableCell>
                                                <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
                                                    {user.roles.map((role) => getStyledChip(role))}
                                                </Box>
                                            </TableCell>

                                            <TableCell>
                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    size="small"
                                                    sx={{
                                                        textTransform: "none",
                                                        borderRadius: "5px",
                                                        px: 2,
                                                        py: 0.5,
                                                        transition: "transform 0.2s, box-shadow 0.2s",
                                                        '&:hover': {
                                                            transform: "translateY(-2px)",
                                                            boxShadow: "0px 4px 10px rgba(106, 27, 154, 0.3)",
                                                        },
                                                    }}
                                                >
                                                    Manage ▾
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                            <Pagination
                                count={1}
                                page={1}
                                onChange={handleChangePage}
                                shape="circular"
                                color="secondary"
                            />
                        </Box>
                    </Box> :
                    <Box sx={{ p: 1 }}>
                        <Grid container spacing={2}>
                            {paginatedUsers.map((user, index) => (
                                <Grid item xs={10} sm={5} md={4} key={index}>
                                    <Card
                                        elevation={4}
                                        sx={{
                                            borderRadius: 3,
                                            border: "1px solid #d1c4e9",
                                            transition: "transform 0.25s ease-in-out, box-shadow 0.25s",
                                            boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.1)",
                                            '&:hover': {
                                                transform: "scale(1.03)",
                                                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                                            },
                                            p: 1.5,
                                        }}
                                    >
                                        <CardContent sx={{ p: 1.5, pb: '5px !important' }}>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                                                <Avatar
                                                    sx={{
                                                        width: 45,
                                                        height: 45,
                                                        fontWeight: "bold",
                                                        color: "#6A1B9A",
                                                        background: "linear-gradient(135deg, #E1BEE7, #CE93D8)",
                                                        boxShadow: "0px 2px 6px rgba(106, 27, 154, 0.15)",
                                                    }}
                                                >
                                                    {getInitial(user.email)}
                                                </Avatar>
                                                <Box>
                                                    <Typography variant="body1" fontWeight="bold" color="#4A0072">{user.email}</Typography>
                                                    <Typography variant="body2" color="text.secondary">Type - {user.type}</Typography>
                                                </Box>
                                            </Box>

                                            <Box sx={{ mt: 1, display: "flex", alignItems: "center", gap: 1 }}>
                                                <Typography variant="body2" fontWeight="bold" color="#6A1B9A">Status - </Typography>
                                                {getStatusChip(user.status)}
                                            </Box>

                                            <Box sx={{ mt: 1, display: "flex", alignItems: "center", flexWrap: "wrap", gap: 0.5 }}>
                                                <Typography variant="body2" fontWeight="bold" color="#6A1B9A">Groups - </Typography>
                                                {user.groups.map((group) => getStyledChip(group))}
                                            </Box>

                                            <Box sx={{ mt: 1, display: "flex", alignItems: "center", flexWrap: "wrap", gap: 0.5 }}>
                                                <Typography variant="body2" fontWeight="bold" color="#6A1B9A">Roles - </Typography>
                                                {user.roles.map((role) => getStyledChip(role))}
                                            </Box>

                                            <Box sx={{ mt: 1, textAlign: "right" }}>
                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    size="small"
                                                    sx={{
                                                        textTransform: "none",
                                                        borderRadius: "5px",
                                                        px: 2.5,
                                                        py: 0.8,
                                                        transition: "transform 0.2s, box-shadow 0.2s",
                                                        '&:hover': {
                                                            transform: "translateY(-2px)",
                                                            boxShadow: "0px 4px 10px rgba(106, 27, 154, 0.3)",
                                                        },
                                                    }}
                                                >
                                                    Manage ▾
                                                </Button>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                            <Pagination count={1} page={1} onChange={handleChangePage} shape="rounded" color="secondary" />
                        </Box>
                    </Box>
            }
        </>
    );
};

export default UsersTable;
