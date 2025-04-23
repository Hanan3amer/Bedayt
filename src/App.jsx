import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from "./components/LayOut/LayOut";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import Targetgroup from "./components/Targetgroup/Targetgroup";
import Specialists from "./components/Specialists/Specialists";
import Header from "./components/Header/Header";
import OTP from "./components/OTP/OTP";
import Password from "./components/Password/Password";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "header", element: <Header /> },
        { path: "contact", element: <Contact /> },
        { path: "services", element: <Services /> },
        { path: "targetgroup", element: <Targetgroup /> },
        { path: "specialists", element: <Specialists /> },
        { path: "otp", element: <OTP /> },
        { path: "password", element: <Password /> },
      ],
    },
  ]);
  return <RouterProvider router={route}></RouterProvider>;
}

export default App;
