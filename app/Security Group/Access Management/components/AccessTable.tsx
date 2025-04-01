import React, { useState } from 'react';
import {
    Tabs,
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip,
    TablePagination,
    IconButton,
    Switch,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { data } from '../constants';
import { getPermissionColor } from '../helper';
import { AccountCircle, Group, Lock } from "@mui/icons-material";

interface TabPanelProps {
    page: number;
    rowsPerPage: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
}

const AccessTable = ({ page, rowsPerPage, setPage, setRowsPerPage }: TabPanelProps) => {
    const [approvalState, setApprovalState] = useState<{ [key: string]: boolean }>(
        data.reduce((acc, row) => ({ ...acc, [row.name]: row.approve }), {})
    );

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleSwitchChange = (name: string) => {
        setApprovalState((prevState: any) => ({
            ...prevState,
            [name]: !prevState[name],
        }));
    };

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'User':
                return <AccountCircle sx={{ color: "#9c27b0" }} fontSize='small' />;
            case 'Group':
                return <Group sx={{ color: "#7b1fa2" }} fontSize='small' />;
            case 'Admin':
                return <Lock sx={{ color: "#d32f2f" }} fontSize='small' />;
            default:
                return <AccountCircle sx={{ color: "#9e9e9e" }} fontSize='small' />;
        }
    };

    const getTypeStyle = (type: string) => {
        switch (type) {
            case 'User':
                return { bgcolor: "#f3e5f5", color: "#9c27b0" };
            case 'Group':
                return { bgcolor: "#ede7f6", color: "#7b1fa2" };
            case 'Admin':
                return { bgcolor: "#f3e5f5", color: "#d32f2f" };
            default:
                return { bgcolor: "#f1f1f1", color: "#9e9e9e" };
        }
    };


    return (
        <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
            <Table>
                <TableHead sx={{ bgcolor: "#d1c4e9" }}>
                    <TableRow>
                        <TableCell sx={{ fontWeight: "bold" }}>User/Group</TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>Type</TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>Permissions</TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>Source</TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>Approve</TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                        <TableRow key={index} hover>
                            <TableCell>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    <Box
                                        sx={{
                                            width: 9,
                                            height: 9,
                                            backgroundColor: "#1976D2",
                                            borderRadius: "50%",
                                        }}
                                    />
                                    {row.name}
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                        padding: "6px 10px",
                                        borderRadius: "12px",
                                        ...getTypeStyle(row.type),
                                        width: "fit-content",
                                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                                        border: "1px solid rgba(0, 0, 0, 0.2)",
                                    }}
                                >
                                    {getTypeIcon(row.type)}
                                    <span style={{ fontWeight: "bold", fontSize: "0.85rem" }}>
                                        {row.type}
                                    </span>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                                    {row.permissions.map((perm) => (
                                        <Chip
                                            key={perm}
                                            label={perm}
                                            sx={{
                                                backgroundColor: getPermissionColor(perm).backgroundColor,
                                                color: getPermissionColor(perm).color,
                                                borderRadius: "6px",
                                                fontSize: "0.85rem",
                                                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                                                border: "1px solid rgba(0, 0, 0, 0.2)"
                                            }}
                                        />
                                    ))}
                                </Box>
                            </TableCell>
                            <TableCell>
                                {row.source && (
                                    <Box
                                        sx={{
                                            display: "inline-block",
                                            px: 1.5,
                                            py: 0.5,
                                            borderRadius: "12px",
                                            fontSize: "0.85rem",
                                            fontWeight: 500,
                                            backgroundColor: "#f3e5f5",
                                            color: "#6a1b9a",
                                            textAlign: "center",
                                            minWidth: "80px",
                                            border: "1px solid rgba(156, 39, 176, 0.5)",
                                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                                        }}
                                    >
                                        {row.source}
                                    </Box>
                                )}
                            </TableCell>


                            <TableCell>
                                <Switch
                                    checked={approvalState[row.name] || false}
                                    color="secondary"
                                    onChange={() => handleSwitchChange(row.name)}
                                />
                            </TableCell>
                            <TableCell>
                                <IconButton>
                                    <InfoOutlinedIcon sx={{ color: "#6a1b9a" }} />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                sx={{
                    bgcolor: "#ede7f6",
                    borderTop: "1px solid #d1c4e9",
                    py: 1
                }}
            />
        </TableContainer>
    );
};

export default AccessTable;
