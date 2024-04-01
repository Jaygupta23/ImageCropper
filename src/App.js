import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ImageUploader from "./components/ImageUploader/ImageUploader";
import ImageScanner from "./components/ImageScanner/ImageScanner";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "./App.css";
import Csv_ZipFolder from "./components/Csv-Zip/Csv_ZipFolder";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ImageUploader />} />
        <Route path="/scanner" element={<ImageScanner />} />
        <Route path="/uploadcsv" element={<Csv_ZipFolder />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
