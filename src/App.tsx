import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Hero from './components/Hero';
import EventsAndMore from './components/EventsAndMore';
import Highlights from './components/Highlights';
import Programs from './components/Programs';
import CareerOpportunities from './components/CareerOpportunities';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Instructors from './components/Instructors';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Courses from './pages/Courses';

function App() {
  return (
    <Router>
      <div className="bg-white font-poppins">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <EventsAndMore />
                <Highlights />
                <Programs />
                <CareerOpportunities />
                <Instructors />
                <Testimonials />
              </>
            } />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
