import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./router/Router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
