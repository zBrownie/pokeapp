import { AppProvide } from 'context/AppContext';
import Login from 'pages/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';

export default function AppRoutes() {
  return (
    <Router>
      <AppProvide>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/agenda" element={<Home />} />
        </Routes>
      </AppProvide>
    </Router>
  );
}
