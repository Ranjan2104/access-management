import { Box, Button, MenuItem, Select, InputLabel, FormControl, TextField } from '@mui/material';
import React, { useState } from 'react';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';

const StudioFilters = ({ activentnprimay, setActiveBtn }: any) => {
    const [open, setOpen] = React.useState(false);

    const handleAction = (typeValue: string) => {
        if (typeValue === "adduser") {
            setActiveBtn((prev: any) => ({ ...prev, adduser: true, import: false, export: false }))
        }
        else if (typeValue === "import") {
            setActiveBtn((prev: any) => ({ ...prev, import: true, adduser: false, export: false }))
        }
        else if (typeValue === "export") {
            setActiveBtn((prev: any) => ({ ...prev, export: true, adduser: false, import: false }))
        }
        if (typeValue === "list") {
            setActiveBtn((prev: any) => ({ ...prev, list: true, card: false }))
        }
        else if (typeValue === "card") {
            setActiveBtn((prev: any) => ({ ...prev, card: true, list: false }))
        }
    }

    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                        onClick={() => handleAction("adduser")}
                        variant="outlined"
                        sx={{
                            textTransform: "none",
                            bgcolor: activentnprimay.adduser ? "#8e24aa" : "",
                            color: activentnprimay.adduser ? "white" : "#8e24aa",
                            display: "flex",
                            alignItems: "center",
                            gap: 1
                        }}
                    >
                        <AddCircleOutlineOutlinedIcon fontSize='small' />
                        Add User
                    </Button>
                    <Button
                        variant="outlined"
                        sx={{
                            textTransform: "none",
                            bgcolor: activentnprimay.import ? "#8e24aa" : "",
                            color: activentnprimay.import ? "white" : "#8e24aa",
                            display: "flex",
                            alignItems: "center",
                            gap: 1
                        }}
                        onClick={() => handleAction("import")}
                    >
                        <FileUploadOutlinedIcon fontSize='small' />
                        Import Users
                    </Button>
                    <Button
                        variant="outlined"
                        sx={{
                            textTransform: "none",
                            bgcolor: activentnprimay.export ? "#8e24aa" : "",
                            color: activentnprimay.export ? "white" : "#8e24aa",
                            display: "flex",
                            alignItems: "center",
                            gap: 1
                        }}
                        onClick={() => handleAction("export")}
                    >
                        <AssessmentOutlinedIcon fontSize='small' />
                        Export / Report
                    </Button>
                </Box>

                <Box sx={{ display: "flex", gap: 2 }}>
                    <Button
                        variant="outlined"
                        sx={{
                            textTransform: "none",
                            bgcolor: activentnprimay.list ? "#8e24aa" : "",
                            color: activentnprimay.list ? "white" : "#8e24aa",
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            borderRadius: 5
                        }}
                        onClick={() => handleAction("list")}
                    >
                        List
                    </Button>
                    <Button
                        variant="outlined"
                        sx={{
                            textTransform: "none",
                            bgcolor: activentnprimay.card ? "#8e24aa" : "",
                            color: activentnprimay.card ? "white" : "#8e24aa",
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            borderRadius: 5
                        }}
                        onClick={() => handleAction("card")}

                    >
                        Card
                    </Button>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, paddingBottom: 2 }}>
                <TextField
                    label="Search users..."
                    variant="outlined"
                    size='small'
                    sx={{ width: 300 }}
                />

                <FormControl size="small" sx={{ width: 150 }}>
                    <InputLabel id="demo-simple-select-label">Types</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Types"
                    >
                        <MenuItem value="All Types">All Types</MenuItem>
                    </Select>
                </FormControl>
                <FormControl size="small" sx={{ width: 150 }}>
                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Status"
                    >
                        <MenuItem value="All Status">All Status</MenuItem>
                    </Select>
                </FormControl>
            </Box>

        </>
    );
};

export default StudioFilters;
