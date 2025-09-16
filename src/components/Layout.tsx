import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import WhatsAppButton from "./WhatsAppButton";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;