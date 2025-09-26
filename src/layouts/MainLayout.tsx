import { Outlet } from "react-router";
import Navbar from "../components/Layout/Navbar";

const DashboardLayout = () => {
  return (
    <>
      <Navbar /> {/* Navbar hanya muncul di layout ini */}
      <Outlet /> {/* halaman child akan muncul di sini */}
    </>
  );
};

export default DashboardLayout;
