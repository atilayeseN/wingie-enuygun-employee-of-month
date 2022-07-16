import { Toaster } from "react-hot-toast";
import { useRoutes } from "react-router-dom";
import { routes } from "./Routes/Routes";

function App() {
  return <>
  <Toaster position="top-center"/>
  {useRoutes(routes)}
  </>
}

export default App;
