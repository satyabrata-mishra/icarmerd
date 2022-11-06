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
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/icramerd22" element={<Icramerd2022 />} />
        <Route path="/icramerd21" element={<Icramerd2021 />} />
        <Route path="/icramerd20" element={<Icramerd2020 />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/conference-theme" element={<ConferenceTheme />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/important-dates" element={<ImportantDates />} />
        <Route path="/committees" element={<Committees />} />
        <Route path="/contact-us" element={<Contactus />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
