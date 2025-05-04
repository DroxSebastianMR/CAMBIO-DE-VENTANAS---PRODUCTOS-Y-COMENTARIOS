import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ConfirmPage from './pages/ConfirmPage';
import CommentsPage from './pages/CommentsPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/confirm/:productId" element={<ConfirmPage />} />
        <Route path="/comentarios" element={<CommentsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
