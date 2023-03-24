import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import ViewPost from "./components/ViewPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/viewpost/:id" element={<ViewPost />} />
        <Route path="/editpost/:id" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
