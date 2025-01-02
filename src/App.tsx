import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/layouts/Layout";
import About from "@/pages/About";
import Blogs from "@/pages/Blogs";
import Events from "@/pages/Events";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Projects from "@/pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
