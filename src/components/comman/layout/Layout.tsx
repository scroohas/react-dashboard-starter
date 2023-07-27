import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import "./layout.css";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <section className="app-layout">
      <Header />
      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <section className="main">
          <Outlet />
        </section>
      </div>
    </section>
  );
}

export default Layout;
