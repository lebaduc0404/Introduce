import HomePage from "@/pages/(website)/home/page";
import IntroducingPage from "@/pages/(website)/introducing/page";
import IntroducingNewPage from "@/pages/(website)/introducingNew/page";
import Layout from "@/pages/(website)/post/Layout";
import Terms from "@/pages/(website)/terms/page";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/launch" index element={<IntroducingPage />} />
        <Route path="/new" index element={<IntroducingNewPage />} />
        <Route path="/terms" index element={<Terms />} />
        <Route path="/post" index element={<Layout />} />
        <Route path="/post/:id" index element={<Layout />} />
      </Routes>
    </div>
  );
};

export default Router;
