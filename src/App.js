import './App.css';
import Navbar from "../src/Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer';
import EventDescription from './Components/EventDescription';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <EventDescription />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
