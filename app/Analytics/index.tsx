import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { useApplyFilter } from "./customHook";

const AnalyticsFilters = dynamic(() => import("./components/AnalyticsFilter"), { ssr: false });
const AnalyticsCard = dynamic(() => import("./components/AnalyticsCard"), { ssr: false });
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function Dashboard() {
  const executionTrends = {
    series: [
      { name: "Success", data: [200, 300, 350, 400, 450, 500] },
      { name: "Failure", data: [100, 120, 130, 140, 150, 160] },
    ],
    options: {
      chart: { type: "line" as "line", height: 250 },
      colors: ["#28a745", "#dc3545"],
      stroke: { width: 3, curve: "smooth" },
      xaxis: {
        categories: ["Mar 4", "Mar 11", "Mar 18", "Mar 25", "Apr 1", "Apr 3"],
        labels: { style: { colors: "#555", fontSize: "12px" } },
      },
      legend: {
        position: "top",
        markers: { fillColors: ["#28a745", "#dc3545"] },
        fontSize: "14px",
      },
    } as ApexOptions,
  };

  const runtimeDistribution = {
    series: [{ data: [10, 20, 30, 25, 15, 5] }],
    options: {
      chart: { type: "bar" as "bar", height: 250 },
      colors: ["#800080"],
      xaxis: {
        categories: ["<1m", "1-2m", "2-3m", "3-4m", "5-10m", ">10m"],
        labels: { style: { colors: "#555", fontSize: "12px" } },
      },
    } as ApexOptions,
  };


  const { filterData, updateFilter } = useApplyFilter();

  return (
    <Box sx={{ padding: 3, backgroundColor: "#f4f6f8", minHeight: "100vh" }}>
      <Typography variant="h5" fontWeight="bold" sx={{ color: "#333", mb: 2 }}>
        Workflow Studio
      </Typography>

      <AnalyticsFilters updateFilter={updateFilter}/>

      <Grid container spacing={3} sx={{ mt: 3 }}>
        {filterData.length > 0 && filterData?.map((data, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <AnalyticsCard data={data} />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              borderRadius: 3,
              transition: "transform 0.3s ease",
              "&:hover": { transform: "scale(1.02)" },
            }}
          >
            <CardContent>
              <Typography variant="h6" fontWeight="bold" sx={{ color: "#333", mb: 2 }}>
                📊 Execution Trends
              </Typography>
              <Chart options={executionTrends.options} series={executionTrends.series} type="line" height={250} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card
            sx={{
              background: "linear-gradient(135deg, #fafafa 0%, #e0e0e0 100%)",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              borderRadius: 3,
              transition: "transform 0.3s ease",
              "&:hover": { transform: "scale(1.02)" },
            }}
          >
            <CardContent>
              <Typography variant="h6" fontWeight="bold" sx={{ color: "#333", mb: 2 }}>
                📈 Runtime Distribution
              </Typography>
              <Chart options={runtimeDistribution.options} series={runtimeDistribution.series} type="bar" height={250} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
