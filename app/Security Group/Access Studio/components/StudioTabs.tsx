import { Tab, Tabs } from "@mui/material";
import React from "react";

interface TabPanelProps {
    tabIndex: number;
    setTabIndex: React.Dispatch<React.SetStateAction<number>>;
}

const StudioTabs = ({ tabIndex, setTabIndex }: TabPanelProps) => {
    return (
        <div>
            <Tabs
                value={tabIndex}
                onChange={(e, newValue) => setTabIndex(newValue)}
                sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    mb: 2,
                    "& .MuiTabs-indicator": {
                        backgroundColor: "#8e24aa",
                    },
                    "& .Mui-selected": {
                        backgroundColor: "#e8eaf6",
                        borderRadius: "8px 8px 0 0",
                        color: "#4a148c",
                    },
                    "& .MuiTab-root": {
                        textTransform: "none",
                        color: "#6a1b9a",
                        fontWeight: 500,
                        fontSize: "0.875rem",
                        padding: "8px 16px",
                        "&:hover": {
                            color: "#8e24aa",
                            backgroundColor: "#d1c4e9",
                        },
                    },
                }}
            >
                <Tab label="Users" />
                <Tab label="Groups" />
                <Tab label="Roles" />
                <Tab label="Permissions" />
                <Tab label="Requests" />
                <Tab label="History" />
            </Tabs>
        </div>
    );
};

export default StudioTabs;
