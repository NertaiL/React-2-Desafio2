import { Routes as Rs, Route as R } from "react-router-dom";
import Home from "../../views/Home";
import Favorites from "../../views/Favorites";
import NotFound from "../../views/NotFound";

const ConnectRoutes = () => {
  return (
    <Rs>
      <R path="/" element={<Home />} />
      <R path="/favorite" element={<Favorites />} />
      <R path="*" element={<NotFound />} />
    </Rs>
  );
};

export default ConnectRoutes;
