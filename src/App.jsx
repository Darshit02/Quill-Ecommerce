import { Route, Routes } from "react-router-dom";
import CustomerRoutes from "./Routers/CustomerRoutes";
import AdminRouters from "./Routers/AdminRouters";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRoutes/>}/>
        <Route path="/admin/*" element={<AdminRouters/>}/>
      </Routes>
    </div>
  );
};

export default App;
