import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SapancaPage from './pages/SapancaPage';
import KaynarcarPage from './pages/KaynarcarPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sapanca" element={<SapancaPage />} />
      <Route path="/kaynarca" element={<KaynarcarPage />} />
    </Routes>
  );
}
