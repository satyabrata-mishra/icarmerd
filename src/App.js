import './App.css';
import Navbar from "../src/Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Icramerd2020 from './Pages/Icramerd2020';
import Icramerd2021 from './Pages/Icramerd2021';
import Icramerd2022 from './Pages/Icramerd2022';
import ImportantDates from './Pages/ImportantDates';
import Committees from './Pages/Committees';
import Submission from './Pages/Submission';
import Contactus from './Pages/Contactus';
import ConferenceTheme from './Pages/ConferenceTheme';
import Registration from './Pages/Registration';

function App() {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home handleScroll={handleScroll} />} />
        <Route path="/icramerd22" element={<Icramerd2022 handleScroll={handleScroll} />} />
        <Route path="/icramerd21" element={<Icramerd2021 handleScroll={handleScroll} />} />
        <Route path="/icramerd20" element={<Icramerd2020 handleScroll={handleScroll} />} />
        <Route path="/submission" element={<Submission handleScroll={handleScroll} />} />
        <Route path="/conference-theme" element={<ConferenceTheme handleScroll={handleScroll} />} />
        <Route path="/registration" element={<Registration handleScroll={handleScroll} />} />
        <Route path="/important-dates" element={<ImportantDates handleScroll={handleScroll} />} />
        <Route path="/committees" element={<Committees handleScroll={handleScroll} />} />
        <Route path="/contact-us" element={<Contactus handleScroll={handleScroll} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;