import { Route, Routes } from "react-router";
import { Home } from "./Pages/Home";
import { Career } from "./Pages/Career";
import { ContactMe } from "./Pages/ContactMe";
import { Portfolio } from "./Pages/Portfolio";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/Career" element={<Career />} />
      <Route path="/ContactMe" element={<ContactMe />} />
    </Routes>
  );
};
