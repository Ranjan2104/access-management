import { Card, CardContent, Typography, Box } from "@mui/material";

interface AnalyticsCardProps {
  title: string;
  value: string;
  change: string;
  changeColor: string;
}

export default function AnalyticsCard({ data }: { data: AnalyticsCardProps }) {
  return (
    <Card
      elevation={10}
      sx={{
        borderRadius: 2,
        p: 2,
        minWidth: 250,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 8,
        },
        borderTop: "5px solid #800080",
      }}
    >
      <CardContent sx={{ textAlign: "left" }}>
        <Typography variant="body2" sx={{ fontWeight: 600, color: "#333" }}>
          {data?.title}
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 700, mt: 1 }}>
          {data?.value}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 1,
            color: `${data?.changeColor}`,
            fontWeight: 500,
          }}
        >
          <Typography variant="body2">{data?.change}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
