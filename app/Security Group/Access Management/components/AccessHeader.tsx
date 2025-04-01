import React from "react";
import { Typography, Breadcrumbs, Link, Box, Paper } from "@mui/material";

const AccessHeader = () => {
    return (
        <Paper elevation={3} sx={{
            p: 3, mb: 4, borderRadius: 2, boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.15)", // More prominent shadow
            background: "linear-gradient(135deg, #f3e5f5, #e1bee7)",
        }}>
            <Breadcrumbs separator="›" sx={{ mb: 1, color: "gray" }}>
                <Link underline="hover" color="inherit" href="#">
                    Dashboard
                </Link>
                <Link underline="hover" color="inherit" href="#">
                    Administration
                </Link>
                <Typography color="textPrimary">Access Management</Typography>
            </Breadcrumbs>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, color: "#6a1b9a" }}>
                Workflow Access Management
            </Typography>
            <Typography variant="body1" color="textSecondary">
                Manage permissions for workflows, templates, and resources
            </Typography>
        </Paper>
    );
};

export default AccessHeader;
