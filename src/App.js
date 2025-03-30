import "./App.css";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Navbars from "./components/Navbars";
import { Routes, Route, Navigate } from "react-router-dom";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <div className="App">
      <Navbars />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route
          path="/userProfile/:userId/:email/:phone"
          element={<UserProfile />}
        />
      </Routes>
    </div>
  );
}

export default App;
