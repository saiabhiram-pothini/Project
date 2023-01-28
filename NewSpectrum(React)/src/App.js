// import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Student from "./components/Student";
import Enterprenuer from "./components/Enterprenuer";
import Search from "./components/Search";
import Submit from "./components/Submit";
import Responses from "./components/Responses";
import Post from "./components/Post";
import Enterview from "./components/Enterview";
import Stu from "./components/Stuidea";
import View from "./components/Stuview";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stu" element={<Student />} />
          <Route path="/enter" element={<Enterprenuer />} />
          <Route path="/idea" element={<Stu />} />
          <Route path="/sear" element={<Search />} />
          <Route path="/view" element={<View />} />
          <Route path="/sub" element={<Submit />} />
          <Route path="/resp" element={<Responses />} />
          <Route path="/pos" element={<Post />} />
          <Route path="/enterv" element={<Enterview />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
