import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Doctors from './pages/Doctors';
import Services from './pages/Services';
import Specialities from './pages/Specialities';
import PagePlaceholder from './components/PagePlaceholder';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="about" element={<Navigate to="/about-us" replace />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="services" element={<Services />} />
          <Route path="services/in-patient" element={<PagePlaceholder title="In-Patient Services" />} />
          <Route path="services/out-patient" element={<PagePlaceholder title="Out-Patient Services" />} />
          <Route path="services/ocular-trauma" element={<PagePlaceholder title="Ocular Trauma Clinic" />} />
          <Route path="services/precision-imaging" element={<PagePlaceholder title="Precision Scanning & Imaging" />} />
          <Route path="services/orthoptic-evaluation" element={<PagePlaceholder title="Orthoptic Evaluation" />} />
          <Route path="specialities" element={<Specialities />} />
          <Route path="specialities/retina" element={<PagePlaceholder title="Vitreo Retina" />} />
          <Route path="specialities/cataract" element={<PagePlaceholder title="Cataract" />} />
          <Route path="specialities/cornea" element={<PagePlaceholder title="Cornea & Laser Correction" />} />
          <Route path="specialities/paediatric" element={<PagePlaceholder title="Paediatric, Squint & Neuro Ophthal" />} />
          <Route path="specialities/oculoplasty" element={<PagePlaceholder title="Orbit & Oculoplasty" />} />
          <Route path="specialities/glaucoma" element={<PagePlaceholder title="Glaucoma" />} />
          <Route path="specialities/uvea" element={<PagePlaceholder title="Uvea Services" />} />
          <Route path="specialities/community" element={<PagePlaceholder title="Community Ophthalmology" />} />
          <Route path="specialities/general" element={<PagePlaceholder title="General Ophthalmology" />} />
          <Route path="our-centers" element={<PagePlaceholder title="Our Centers" description="Locations and branches of Giridhar Eye Institute." />} />
          <Route path="history" element={<PagePlaceholder title="History" />} />
          <Route path="mission-vision" element={<PagePlaceholder title="Mission & Vision" />} />
          <Route path="careers" element={<PagePlaceholder title="Careers" />} />
          <Route path="faqs" element={<PagePlaceholder title="FAQs" />} />
          <Route path="resources" element={<PagePlaceholder title="Resources" />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
