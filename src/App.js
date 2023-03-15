import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EmptyCase from "./components/EmptyCase";
import Task1 from "./components/hws/first/task1";
import HW1 from "./components/hws/first";

function App() {
  return (
    <>
      <Navbar />
        <Routes>
            <Route path="/" element={<EmptyCase />} />
            <Route exact path="/hw-1" element={<HW1 />} />
            <Route exact path="/hw-1/task-1" element={<Task1 />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
