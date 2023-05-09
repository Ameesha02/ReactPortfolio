import "./index.css"
import Home from "./routes/Home"

import About from "./routes/About"
import Project from "./routes/Project"
import {Route,Routes} from "react-router-dom"
import Footer from "./components/Footer"


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
         <Route path="/Project" element={<Project />} />
         <Route path="/About" element={<About />} />
         <Route path="/Footer" element={<Footer/>} />
         </Routes></>
  );
}

export default App;
