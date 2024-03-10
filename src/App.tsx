import Spinners from "./components/loading/Spinners";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
const PrivateRoutes = lazy(() => import("./auth/PrivateRoutes"));

Routes;
const App = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <Suspense fallback={<Spinners />}>
            <PrivateRoutes />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default App;
