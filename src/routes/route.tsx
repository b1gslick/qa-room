import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { About } from "../pages/about";
import { ChannelPage } from "../pages/channel";
import { Articles } from "../pages/articles";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="articles" element={<Articles />} />
      <Route path="channel" element={<ChannelPage />} />
    </Routes>
  );
};

export default AppRoutes;
