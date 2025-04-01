import React from "react";
import { Container } from "@mui/material";
import AccessHeader from "./components/AccessHeader";
import AccessTab from "./components/AccessTab";
import AccessFilter from "./components/AccessFilter";
import AccessTable from "./components/AccessTable";

const AccessManagement: React.FC = () => {
  const [tabIndex, setTabIndex] = React.useState<number>(0);
  const [selectedWorkflow, setSelectedWorkflow] = React.useState<string>("");
  const [showPermissions, setShowPermissions] = React.useState<string>("");
  const [page, setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);

  return (
    <Container maxWidth="xl" sx={{ backgroundColor: "#f3e5f5", p: 3, borderRadius: 2, boxShadow: 3 }}>
      <AccessHeader />

      <AccessTab tabIndex={tabIndex} setTabIndex={setTabIndex} />

      <AccessFilter
        selectedWorkflow={selectedWorkflow}
        setShowPermissions={setShowPermissions}
        setSelectedWorkflow={setSelectedWorkflow}
        showPermissions={showPermissions}
      />

      <AccessTable
        page={page}
        rowsPerPage={rowsPerPage}
        setPage={setPage}
        setRowsPerPage={setRowsPerPage}
      />
    </Container>
  );
};

export default AccessManagement;
