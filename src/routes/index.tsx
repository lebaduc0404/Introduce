import HomePage from "@/pages/(website)/home/page";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <div>
      <Routes>
          <Route path="/" index element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default Router;
