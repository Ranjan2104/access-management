import React, { useState } from "react";
import { Box } from "@mui/material";
import StudioHeader from "./components/StudioHeader";
import StudioTabs from "./components/StudioTabs";
import StudioFilters from "./components/StudioFilters";
import StudioTable from "./components/StudioTable";
import AddUserModal from "./components/AddUserModal";

const AccessStudio: React.FC = () => {
    const [tabIndex, setTabIndex] = React.useState<number>(0);
    const [activentnprimay, setActiveBtn] = useState({
        adduser: false,
        import: false,
        export: false,
        list: true,
        card: false
    })
    return (
        <Box sx={{ backgroundColor: "white", p: 3, borderRadius: 2, }}>
            <StudioHeader />

            <StudioTabs tabIndex={tabIndex} setTabIndex={setTabIndex} />

            <StudioFilters setActiveBtn={setActiveBtn} activentnprimay={activentnprimay} />

            {
                (() => {
                    if (tabIndex === 0) {
                        return (
                            <StudioTable activentnprimay={activentnprimay} />
                        );
                    }
                    else if (tabIndex === 1) {
                        return (
                            null
                        );
                    } else {
                        return null
                    }
                })()
            }

            <AddUserModal activentnprimay={activentnprimay} setActiveBtn={setActiveBtn} />
        </Box>
    );
};

export default AccessStudio;
