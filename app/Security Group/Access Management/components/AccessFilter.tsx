import { Box, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import React from 'react';
import AddPermission from './AddPermission';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

interface AccessFilterProps {
    selectedWorkflow: string;
    setShowPermissions: React.Dispatch<React.SetStateAction<string>>;
    setSelectedWorkflow: React.Dispatch<React.SetStateAction<string>>;
    showPermissions: string;
}

const AccessFilter = ({ selectedWorkflow, setShowPermissions, setSelectedWorkflow, showPermissions }: AccessFilterProps) => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Button
                    onClick={() => setOpen(true)}
                    variant="contained"
                    sx={{
                        textTransform: "none",
                        bgcolor: "#8e24aa",
                        color: "white",
                        '&:hover': { bgcolor: "#6a1b9a" },
                        display: "flex",
                        alignItems: "center",
                        gap: 1
                    }}
                >
                    <AddCircleOutlineOutlinedIcon fontSize="small" />
                    Add Permission
                </Button>

                <Box sx={{ display: "flex", gap: 2 }}>
                    <FormControl size="small" sx={{ width: 250 }}>
                        <InputLabel id="demo-simple-select-label">Workflow</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedWorkflow}
                            onChange={(e) => setSelectedWorkflow(e.target.value)}
                            label="Workflow"

                        >
                            <MenuItem value="Workflow-api-deployment">Workflow-api-deployment</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl size="small" sx={{ width: 150 }}>
                        <InputLabel id="demo-simple-select-label">Permissions</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={showPermissions}
                            onChange={(e) => setShowPermissions(e.target.value)}
                            label="Permissions"
                        >
                            <MenuItem value="All Permission">All Permission</MenuItem>
                            <MenuItem value="Read">Read</MenuItem>
                            <MenuItem value="Execute">Execute</MenuItem>
                            <MenuItem value="Modify">Modify</MenuItem>
                            <MenuItem value="Approve">Approve</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
            <AddPermission open={open} setOpen={setOpen} />
        </>
    );
};

export default AccessFilter;
