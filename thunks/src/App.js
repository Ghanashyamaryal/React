import { Outlet } from "react-router-dom";
import Navbar from "./component/nav";
function App() {
  return (
    <div >
     <Navbar/>
     <Outlet/>
    </div>
  );
}

export default App;
