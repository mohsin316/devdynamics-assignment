import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RootLayout from "./layout/RootLayout";
import EmployeeDetails from "./pages/EmployeeDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="employee/:id" element={<EmployeeDetails />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
