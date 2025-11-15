import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Navbar from "./components/Navbar";
import ComputerEnglish from "./pages/ComputerEnglish";
import ComputerHindi from "./pages/ComputerHindi";
import ComputerTelugu from "./pages/ComputerTelugu";
import MobileEnglish from "./pages/MobileEnglish";
import MobileHindi from "./pages/MobileHindi";
import MobileTelugu from "./pages/MobileTelugu";
import SecurityEnglish from "./pages/SecurityEnglish";
import SecurityHindi from "./pages/SecurityHindi";
import SecurityTelugu from "./pages/SecurityTelugu";
import QuizEnglish from "./pages/QuizEnglish";
import CertificateEnglish from "./pages/CertificateEnglish";
import QuizHindi from "./pages/QuizHindi";
import QuizTelugu from "./pages/QuizTelugu";
import Copilot from "./components/Copilot";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/computer-english" element={<ComputerEnglish />} />
        <Route path="/courses/quiz-english" element={<QuizEnglish />} />
        <Route path="/courses/certificate-english" element={<CertificateEnglish />} />

        <Route path="/courses/computer-hindi" element={<ComputerHindi />} />
        <Route path="/courses/quiz-hindi" element={<QuizHindi />} />
        <Route path="/courses/quiz-telugu" element={<QuizTelugu />} />
        <Route path="/courses/computer-telugu" element={<ComputerTelugu />} />
        <Route path="/courses/mobile-english" element={<MobileEnglish />} />
        <Route path="/courses/mobile-hindi" element={<MobileHindi />} />
        <Route path="/courses/mobile-telugu" element={<MobileTelugu />} />
        <Route path="/courses/security-english" element={<SecurityEnglish />} />
        <Route path="/courses/security-hindi" element={<SecurityHindi />} />
        <Route path="/courses/security-telugu" element={<SecurityTelugu />} />
      </Routes>
      <Copilot />
    </Router>
  );
}

export default App;
