import { useState } from "react";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  Button,
  Breadcrumbs,
  Link,
  Paper,
} from "@mui/material";
import { handleExportReport } from "../helper";

const reportData = [
  ["Date", "Success Count", "Failure Count"],
  ["Mar 4", 200, 100],
  ["Mar 11", 300, 120],
  ["Mar 18", 350, 130],
  ["Mar 25", 400, 140],
  ["Apr 1", 450, 150],
  ["Apr 3", 500, 160],
];

interface FilterProps {
  updateFilter: (filter: { workflowTemplate?: string, environment?: string, status?: string }) => void;
}

export default function AnalyticsFilters({ updateFilter }: FilterProps) {
  const [timeRange, setTimeRange] = useState("Last 30 Days");

  const [localFilters, setLocalFilters] = useState<{ workflowTemplate?: string, environment?: string, status?: string }>({
    workflowTemplate: "All Templates",
    environment: "All Environments",
    status: "All Status"
  });

  const handleApply = () => {
    updateFilter(localFilters);
  };

  const handleReset = () => {
    const defaultFilters = {
      workflowTemplate: "All Templates",
      environment: "All Environments",
      status: "All Status"
    };
    setLocalFilters(defaultFilters);
    updateFilter(defaultFilters);
  };

  return (
    <Paper
      sx={{
        p: 3,
        background: "linear-gradient(to right, #ffffff, #f8f9fa)",
        borderRadius: 3,
        boxShadow: "0px 8px 20px rgba(0,0,0,0.12)",
      }}
    >
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="#" sx={{ fontSize: 14 }}>
          Dashboard
        </Link>
        <Link underline="hover" color="inherit" href="#" sx={{ fontSize: 14 }}>
          WorkflowStudio
        </Link>
        <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
          Analytics
        </Typography>
      </Breadcrumbs>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Workflow Analytics
        </Typography>

        <Button
          variant="contained"
          sx={{
            background: "#800080",
            color: "#fff",
            borderRadius: 2,
            textTransform: "none",
            padding: "8px 20px",
            boxShadow: "0px 5px 10px rgba(255,140,0,0.3)",
            transition: "all 0.3s ease-in-out",

            "&:hover": {
              background: "#800080",
              boxShadow: "0px 10px 20px rgba(255,140,0,0.5)",
              transform: "scale(1.05)",
            },

            "&:active": {
              transform: "scale(0.95)",
            },
          }}
          onClick={() => handleExportReport(reportData)}
        >
          Export Report
        </Button>
      </Box>

      <Typography variant="body2" color="textSecondary">
        Monitoring and performance metrics for all workflows
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mt: 3,
          flexWrap: "wrap",
          background: "#fff",
          borderRadius: 3,
          boxShadow: "0px 2px 8px rgba(0,0,0,0.08)",
          p: 3,
          transition: "box-shadow 0.3s ease",
          "&:hover": { boxShadow: "0px 4px 12px rgba(0,0,0,0.10)" },
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography fontSize={14} fontWeight={600} color="textSecondary">
            Workflow Template
          </Typography>
          <Select
            fullWidth
            value={localFilters.workflowTemplate}
            onChange={(e) => setLocalFilters({ ...localFilters, workflowTemplate: e.target.value })}
            size="small"
            sx={{
              background: "#fff",
              borderRadius: 2,
              transition: "all 0.3s",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.08)",
              "&:hover": { background: "#f1f1f1" },
            }}
          >
            <MenuItem value="All Templates">All Templates</MenuItem>
            <MenuItem value="Template 1">Template 1</MenuItem>
            <MenuItem value="Template 2">Template 2</MenuItem>
          </Select>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography fontSize={14} fontWeight={600} color="textSecondary">
            Environment
          </Typography>
          <Select
            fullWidth
            value={localFilters.environment}
            onChange={(e) => setLocalFilters({ ...localFilters, environment: e.target.value })}
            size="small"
            sx={{
              background: "#fff",
              borderRadius: 2,
              transition: "all 0.3s",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.08)",
              "&:hover": { background: "#f1f1f1" },
            }}
          >
            <MenuItem value="All Environments">All Environments</MenuItem>
            <MenuItem value="Production">Production</MenuItem>
            <MenuItem value="Staging">Staging</MenuItem>
          </Select>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography fontSize={14} fontWeight={600} color="textSecondary">
            Status
          </Typography>
          <Select
            fullWidth
            size="small"
            value={localFilters.status}
            onChange={(e) => setLocalFilters({ ...localFilters, status: e.target.value })}
            sx={{
              background: "#fff",
              borderRadius: 2,
              transition: "all 0.3s",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.08)",
              "&:hover": { background: "#f1f1f1" },
            }}
          >
            <MenuItem value="All Status">All Status</MenuItem>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </Select>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography fontSize={14} fontWeight={600} color="textSecondary">
            Time Range
          </Typography>
          <Select
            fullWidth
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            size="small"
            sx={{
              background: "#fff",
              borderRadius: 2,
              transition: "all 0.3s",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.08)",
              "&:hover": { background: "#f1f1f1" },
            }}
          >
            <MenuItem value="Last 30 Days">Last 30 Days</MenuItem>
            <MenuItem value="Last 60 Days">Last 60 Days</MenuItem>
          </Select>
        </Box>

        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
          <Button
            variant="contained"
            sx={{
              background: "#800080",
              color: "#fff",
              borderRadius: 2,
              textTransform: "none",
              padding: "8px 20px",
              fontWeight: "bold",
              boxShadow: "0px 5px 10px rgba(0,123,255,0.3)",
              transition: "background 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0px 6px 12px rgba(0,123,255,0.3)",
              },
            }}
            onClick={handleApply}
          >
            Apply
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderColor: "#007bff",
              color: "#007bff",
              borderRadius: 2,
              padding: "8px 20px",
              textTransform: "none",
              fontWeight: "bold",
              transition: "background 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                background: "#e3f2fd",
                borderColor: "#0056b3",
                boxShadow: "0px 4px 10px rgba(0,123,255,0.2)",
              },
            }}
            onClick={handleReset}
          >
            Reset
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
