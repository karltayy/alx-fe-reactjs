import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
  <Route path="/profile" element={<Profile />}>
  <Route path="/blog/:id" element={<BlogPost />} /> {/* Dynamic Route */}
    <Route path="details" element={<ProfileDetails />} />
    <Route path="settings" element={<ProfileSettings />} />
  </Route>
  <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;