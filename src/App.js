import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EmptyCase from "./components/EmptyCase";

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route exact path="/hw-1" element={<></>} />
          <Route exact path="/" element={<EmptyCase />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
