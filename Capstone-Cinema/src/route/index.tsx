import { lazy, Suspense } from "react";
// ----------------------------
import { createBrowserRouter } from "react-router-dom";
// ----------------------------
// import Home from "../pages/home/home";
// ------- Lazy Load --------
// const Home = lazy(() => import("../pages/home/home"));
// const Search = lazy(() => import("../pages/search/search"));
// const Detail = lazy(() => import("../pages/detail/detail"));
const Login = lazy(() => import("../pages/login/login"));
// const Carts = lazy(() => import("../pages/carts/carts"));
// const Profile = lazy(() => import("../pages/profile/profile"));
const Register = lazy(() => import("../pages/register/register"));
// ------- Template sẽ rất nhẹ chúng ta không cần lazy load -------
import HomeTemplate from "../templates/home/home.template";
// import AuthTemplate from "../templates/auth/auth.template";


// setup router
// path không được có "/" phía trước đường dẫn.

/**
 * url: /search
 * <HomeTemplate>
 *  <Search>
 *  </Search>
 * </HomeTemplate>
 */

export const router = createBrowserRouter([
  {
    element: <HomeTemplate />,
    children: [
    //   {
    //     path: "", // -> /
    //     element: <Home />,
    //   },
    //   {
    //     path: "search", // -> /search
    //     element: (
    //       // nếu file component chưa tải xong thì nó sẽ render component trong fallback
    //       <Search />
    //     ), // ? chắc chắn là Component Search đã tải xong hay chưa?
    //     children: [
    //       {
    //         path: "abc/*", // /search/abc/fadsfasdf
    //         element: <h1>abc</h1>,
    //       },
    //       {
    //         // nếu người dùng nhập: /search/def một đường dẫn không tồn tại thì nó sẽ rơi vào component này.
    //         path: "*", // trùng khớp với mọi đường dẫn
    //         element: <p>Page not found</p>,
    //       },
    //     ],
    //   },
    //   {
    //     path: "detail/:idDetail", // -> /detail/1 , /detail/2 , /detail/3 , /detail/
    //     element: <Detail />,
    //   },
    //   {
    //     path: "carts",
    //     element: <Carts />,
    //   },
    //   {
    //     path: "profile",
    //     element: <Profile />,
    //   },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  // {
  //   path: "auth",
  //   element: <AuthTemplate />,
  //   children: [
      
  //   ],
  // },
  // {
  //   path: "*", // Nếu người dùng gõ một path không trùng khớp với mọi setup trong router của mình thì nó sẽ render ra component này.
  //   element: <h1>Page not found</h1>,
  // },
]);
