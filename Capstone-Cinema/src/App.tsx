// -----------------------
// kết nối với react
import { RouterProvider } from "react-router-dom";
import { router } from "./route"; 
// ------------------------
import { GlobalStyle } from "./components/global-style";

function App() {
  return (
    <GlobalStyle>
      <RouterProvider router={router} />
    </GlobalStyle>
  );
}

export default App;
