import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <Header />
      <div className="p-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
