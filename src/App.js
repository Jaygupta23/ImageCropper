import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ImageUploader from "./components/ImageUploader/ImageUploader";
import ImageScanner from "./components/ImageScanner/ImageScanner";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "./App.css";
import Csv_Zip from "./components/Csv-Zip/Csv_Zip";
import Mapping from "./components/Mapping/Mapping";
import ImageChanger from "./components/ImageChanger/ImageChanger";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Csv_Zip />} />
        <Route path="/uploader" element={<ImageUploader />} />
        <Route path="/scanner" element={<ImageScanner />} />
        <Route path="/mapping" element={<Mapping />} />
        <Route path="/Changer" element={<ImageChanger />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
