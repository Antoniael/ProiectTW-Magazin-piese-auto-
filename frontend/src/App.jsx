import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import PiesePage from "./pages/PiesePage.jsx";
import PiesaDetaliuPage from "./pages/PiesaDetaliuPage.jsx";
import DesprePage from "./pages/DesprePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<PiesePage />} />
        <Route path="/piese/:id" element={<PiesaDetaliuPage />} />
        <Route path="/despre" element={<DesprePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
