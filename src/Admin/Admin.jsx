import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  KanbanSquare,
  PackageOpen,
  PlusCircle,
  Shirt,
  UserCircle2,
  UserRoundCog,
} from "lucide-react";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./components/AdminDashboard";
import CreateProductForm from "./components/CreateProductForm";
import ProductsTable from "./components/ProductsTable";
import OrdersTable from "./components/OrdersTable";
import CustomersTable from "./components/CustomersTable";
import AdminDashboard from "./components/AdminDashboard";

const menu = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: <KanbanSquare />,
  },
  {
    name: "Products",
    path: "/admin/products",
    icon: <PackageOpen />,
  },
  {
    name: "Customers",
    path: "/admin/customers",
    icon: <UserCircle2 />,
  },
  {
    name: "Orders",
    path: "/admin/orders",
    icon: <Shirt />,
  },
  {
    name: "Add Product",
    path: "/admin/product/create",
    icon: <PlusCircle />,
  },
];
const Admin = () => {
  const theme = useTheme();
  const isLargeTheme = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <>
        {/* {isLargeTheme && <Toolbar />} */}
        <List>
          {menu.map((item, index) => (
            <ListItem
              key={index}
              disablePadding
              onClick={() => navigate(item.path)}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <UserRoundCog />
            </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="relative">
      <div className="relative flex">
        <CssBaseline />
        <div className="w-64 h-full sticky top-0 "
        >
          {drawer}
        </div>
        <div className="w-full ">
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/product/create" element={<CreateProductForm />} />
            <Route path="/products" element={<ProductsTable />} />
            <Route path="/orders" element={<OrdersTable />} />
            <Route path="/customers" element={<CustomersTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
