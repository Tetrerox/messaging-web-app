import ChatRoom from "./chat/ChatRoom";
import Sidebar from "./sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./searchpage/SearchPage";

const HomePage = () => {
  return (
    <div className="homePage">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<div></div>} />
          <Route path="/g/:group" element={<ChatRoom />} />
          <Route path="/search/:input" element={<SearchPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default HomePage;
