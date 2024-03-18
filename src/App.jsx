import { Route, Routes } from "react-router-dom";
import CustomerRoutes from "./Routers/CustomerRoutes";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRoutes/>}/>
      </Routes>
    </div>
  );
};

export default App;
