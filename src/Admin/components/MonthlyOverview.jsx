import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import {
  EllipsisVertical,
  IndianRupee,
  MonitorSmartphone,
  TrendingUp,
  User,
} from "lucide-react";
import React from "react";

const salesData = [
  {
    stats: "124",
    label: "Sales",
    color:  "#A855F7",
    icon: <TrendingUp />,
  },
  {
    stats: "10K",
    label: "Customers",
    color: "#22c55e",
    icon: <User />,
  },
  {
    stats: "100+",
    label: "Products",
    color: "#EF4444",
    icon: <MonitorSmartphone />,
  },
  {
    stats: "14K",
    label: "Revenue",
    color: "#3B82F6",
    icon: <IndianRupee />,
  },
];


const MonthlyOverview = () => {
  return (
    <Card>
      <CardHeader
        title="Monthly Overview"
        action={
          <IconButton size="small">
            <EllipsisVertical />
          </IconButton>
        }
        subheader={
          <Typography variant="body2">
            <Box component="span" sx={{ fontWeight: 300 }}>
              Total 48.5% increase in sales
            </Box>
            this month
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: "2rem !important",
            letterSpacing: ".15px !important",
          },
        }}
      />
      <CardContent
        sx={{
          pt: (theme) => `${theme.spacing(3)} !important`,
        }}
      >
        <Grid container spacing={[5, 0]}>
          {renderState()}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MonthlyOverview;

const renderState = () => {
  return (
    
      salesData.map((item, index) => (
        <Grid item xs={12} sm={3} key={index}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar
              variant="rounded"
              sx={{
                mr: 2,
                width: 44,
                height: 44,
                boxShadow: 3,
                color: "white",
                backgroundColor: `${item.color}`,
              }}
            >
              {item.icon}
            </Avatar>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="caption">{item.label}</Typography>
              <Typography variant="h6">{item.stats}</Typography>
            </Box>
          </Box>
        </Grid>
      ))
  )
};
