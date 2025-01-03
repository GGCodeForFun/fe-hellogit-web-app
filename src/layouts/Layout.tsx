import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="mx-auto max-w-[120rem]">
      <Header />
      <div className="px-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
