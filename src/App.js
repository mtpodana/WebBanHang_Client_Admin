import Admin from "./Admin";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
function App() {
  
  return (
    <div className="App" id="wrapper">
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/M/*" element={<Admin></Admin>}></Route>
          <Route path="/Login" element={<Login></Login>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
