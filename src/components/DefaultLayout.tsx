import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useLayoutEffect } from "react";
import ContactOptions from "./ContactOptions";
import AdvisePopup from "./AdvisePopup";

export default function DefaultLayout() {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);
  return (
    <>
      <Header />
      <div className="pt-[60px] lg:pt-[80px]">
        <Outlet />
      </div>
      <Footer />
      <ContactOptions />
      <AdvisePopup />
    </>
  );
}
