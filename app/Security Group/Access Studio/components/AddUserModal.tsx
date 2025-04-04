import React, { useState, useRef } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Tabs,
    Tab,
    TextField,
    MenuItem,
    Box,
    Button,
    Grid,
    IconButton,
    Typography
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const AddUserModal = ({ activentnprimay, setActiveBtn }: any) => {
    const [activeTab, setActiveTab] = useState(0);
    const [formData, setFormData] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        userType: "Human",
        status: "Active",
    });
    const [selectedMethod, setSelectedMethod] = useState<"csv" | "directory">("csv");
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            console.log("File uploaded:", file.name);
        }
    };

    const handleChangeTab = (_event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);

    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleClose = () => {
        setActiveBtn((prev: any) => ({
            ...prev,
            adduser: false
        }));
    };

    return (
        <Dialog
            open={activentnprimay.adduser}
            onClose={handleClose}
            maxWidth="xs"
            fullWidth
            sx={{
                "& .MuiDialog-paper": {
                    minHeight: "520px", // Fixes modal height
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden" // Prevents scrolling
                }
            }}
        >
            {/* Title Section with Light Background */}
            <DialogTitle
                sx={{
                    fontWeight: "bold",
                    textAlign: "left",
                    p: 2,
                    backgroundColor: "#F5F5F5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}
            >
                Add New User
                <IconButton onClick={handleClose} sx={{ color: "gray" }}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent
                sx={{
                    p: 3,
                    flex: 1, // Allows content to expand within modal height
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {/* Tabs */}
                <Tabs
                    value={activeTab}
                    onChange={handleChangeTab}
                    centered
                    sx={{
                        mb: 2,
                        "& .MuiTabs-indicator": {
                            backgroundColor: "#9C27B0", // Purple underline
                        },
                        "& .MuiTab-root": {
                            color: "gray", // Default inactive tab color
                        },
                        "& .Mui-selected": {
                            color: "#9C27B0", // Purple text when active
                            fontWeight: "bold",
                        },
                    }}
                >
                    <Tab label="Single" sx={{ minWidth: "33%" }} />
                    <Tab label="Bulk" sx={{ minWidth: "33%" }} />
                    <Tab label="Service" sx={{ minWidth: "33%" }} />
                </Tabs>


                {/* Form Fields */}
                {
                    activeTab === 0 &&
                    <>
                        <Box sx={{ flex: 1 }}>
                            <TextField
                                fullWidth
                                label="Username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="username@domain.com"
                                size="small"
                                sx={{ mb: 2 }}
                            />
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="First Name"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Last Name"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        size="small"
                                    />
                                </Grid>
                            </Grid>
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                size="small"
                                sx={{ mt: 3 }}
                            />
                            <TextField
                                fullWidth
                                label="Phone (optional)"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                size="small"
                                sx={{ mt: 3 }}
                            />

                            {/* Access Settings */}
                            <Grid container spacing={2} sx={{ mt: 3 }}>
                                <Grid item xs={6}>
                                    <TextField
                                        select
                                        fullWidth
                                        label="User Type"
                                        name="userType"
                                        value={formData.userType}
                                        onChange={handleChange}
                                        size="small"
                                    >
                                        <MenuItem value="Human">Human</MenuItem>
                                        <MenuItem value="Bot">Bot</MenuItem>
                                    </TextField>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        select
                                        fullWidth
                                        label="Status"
                                        name="status"
                                        value={formData.status}
                                        onChange={handleChange}
                                        size="small"
                                    >
                                        <MenuItem value="Active">Active</MenuItem>
                                        <MenuItem value="Inactive">Inactive</MenuItem>
                                    </TextField>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
                            <Button
                                variant="outlined"
                                onClick={handleClose}
                                sx={{
                                    mr: 2,
                                    borderColor: "#9C27B0",
                                    color: "#9C27B0",
                                    "&:hover": { backgroundColor: "#F3E5F5", borderColor: "#7B1FA2" }
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#9C27B0",
                                    "&:hover": { backgroundColor: "#7B1FA2" }
                                }}
                            >
                                Create User
                            </Button>
                        </Box>
                    </>
                }

                {activeTab === 1 && (
                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
                        {/* Import Method Toggle */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                gap: 2,
                                backgroundColor: "#F5F5F5",
                                padding: "10px",
                                borderRadius: "8px",
                            }}
                        >
                            <Button
                                variant={selectedMethod === "csv" ? "contained" : "outlined"}
                                onClick={() => setSelectedMethod("csv")}
                                sx={{
                                    backgroundColor: selectedMethod === "csv" ? "#9C27B0" : "white",
                                    color: selectedMethod === "csv" ? "white" : "black",
                                    textTransform: "none",
                                    borderRadius: "20px",
                                    "&:hover": {
                                        backgroundColor: selectedMethod === "csv" ? "#7B1FA2" : "#F0F0F0",
                                    },
                                }}
                            >
                                Upload CSV File
                            </Button>
                            <Button
                                variant={selectedMethod === "directory" ? "contained" : "outlined"}
                                onClick={() => setSelectedMethod("directory")}
                                sx={{
                                    backgroundColor: selectedMethod === "directory" ? "#9C27B0" : "white",
                                    color: selectedMethod === "directory" ? "white" : "black",
                                    textTransform: "none",
                                    borderRadius: "20px",
                                    "&:hover": {
                                        backgroundColor: selectedMethod === "directory" ? "#7B1FA2" : "#F0F0F0",
                                    },
                                }}
                            >
                                Directory Sync
                            </Button>
                        </Box>

                        <Box
                            sx={{
                                border: "2px dashed #CCCCCC",
                                borderRadius: "10px",
                                padding: "40px",
                                textAlign: "center",
                                color: "gray",
                                backgroundColor: "#FAFAFA",
                                cursor: "pointer",
                                transition: "all 0.3s",
                                "&:hover": {
                                    backgroundColor: "#E8EAF6",
                                    borderColor: "#6200ea",
                                },
                            }}
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <CloudUploadIcon sx={{ fontSize: 50, color: "#9C27B0", mb: 1 }} />
                            <Typography variant="body1">Drag & drop a CSV file here</Typography>
                            <Typography variant="body2" sx={{ color: "#888" }}>
                                or click to browse
                            </Typography>
                            <input type="file" hidden ref={fileInputRef} onChange={handleFileUpload} />
                        </Box>

                        {/* Download Template */}
                        <Box sx={{ textAlign: "center", mt: 2 }}>
                            <Typography variant="body2" sx={{ color: "#777" }}>
                                Need a template?
                            </Typography>
                            <Button
                                variant="text"
                                sx={{
                                    color: "#9C27B0",
                                    textTransform: "none",
                                    fontWeight: "bold",
                                    "&:hover": { textDecoration: "underline" },
                                }}
                            >
                                Download Template
                            </Button>
                        </Box>

                        {/* Import Settings */}
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField select fullWidth label="Default Status" size="small">
                                    <MenuItem value="Active">Active</MenuItem>
                                    <MenuItem value="Inactive">Inactive</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField select fullWidth label="Default User Type" size="small">
                                    <MenuItem value="Human">Human</MenuItem>
                                    <MenuItem value="Bot">Bot</MenuItem>
                                </TextField>
                            </Grid>
                        </Grid>

                        {/* Checkboxes */}
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <input type="checkbox" id="email" />
                                <label htmlFor="email">Send welcome emails to new users</label>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <input type="checkbox" id="duplicates" />
                                <label htmlFor="duplicates">Skip duplicate users</label>
                            </Box>
                        </Box>

                        {/* Buttons */}
                        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
                            <Button variant="outlined" sx={{ textTransform: "none", mr: 2 }}>
                                Cancel
                            </Button>
                            <Button variant="contained" sx={{ backgroundColor: "#9C27B0", textTransform: "none" }}>
                                Import Users
                            </Button>
                        </Box>
                    </Box>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default AddUserModal;
