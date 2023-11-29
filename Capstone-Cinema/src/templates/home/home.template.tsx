import { PropsWithChildren, Suspense } from "react";
import {  Outlet } from "react-router-dom";
// import Header from "./header/header";
// import Footer from "./footer/footer";

function HomeTemplate(props: PropsWithChildren) {
  return (
    <div>
      {/* <Header /> */}

      {/* -----Pages---- */}
      <Suspense fallback={<p>"Loading...."</p>}>
        <Outlet />
      </Suspense>
      {/* props.children */}
      {/* -----Pages---- */}

      {/* <Footer /> */}
    </div>
  );
}

export default HomeTemplate;
