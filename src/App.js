
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Infos from "./Components/Infos/Infos";
import Error from "./Components/Error/Error";
import Logements from "./Components/Logements/Logements";
import Banner from './Components/Banner/Banner';
import Footer from './Layout/Footer';


function App() {
  return (
    <div className="App">
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infos" element={<Infos />} />
        <Route path="/error/*" element={<Error />} />
        <Route path="/logements/:id" element={<Logements />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;