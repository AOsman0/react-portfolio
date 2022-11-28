import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { NavBar } from "./Components/NavBar";
import { Footer } from "./Components/Footer";

export const App = () => {
  return (
    <div className="bg-gradient-to-r from-gray-500">
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
      </BrowserRouter>
      <Footer />
    </div>
  );
};
