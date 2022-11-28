import { AppRoutes } from "./AppRoutes";
import { NavBar } from "./Components/NavBar";
import { Footer } from "./Components/Footer";

export const App = () => {
  return (
    <div className="bg-gradient-to-r from-gray-500">
      <NavBar />
      <AppRoutes />
      <Footer />
    </div>
  );
};
