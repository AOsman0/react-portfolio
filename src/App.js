import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { HashRouter } from "react-router-dom";
import { NavBar } from "./Components/NavBar";
import { Footer } from "./Components/Footer";

export const App = () => {
  return (
    <div className="bg-gradient-to-r from-gray-500">
      <HashRouter>
        <NavBar />
        <AppRoutes />
      </HashRouter>
      <Footer />
    </div>
  );
};
