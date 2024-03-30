import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ImageUploader from "./components/ImageUploader/ImageUploader";
import ImageScanner from "./components/ImageScanner/ImageScanner";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ImageUploader />} />
        <Route path="/scanner" element={<ImageScanner />} />
        <Route path="*" element={<ImageUploader />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
