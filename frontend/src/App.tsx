import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AgentBuilder from './pages/AgentBuilder';
import ChatInterface from './pages/ChatInterface';
import Marketplace from './pages/Marketplace';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/agent-builder" element={<AgentBuilder />} />
        <Route path="/chat/:agentId" element={<ChatInterface />} />
        <Route path="/marketplace" element={<Marketplace />} />
      </Routes>
    </Router>
  );
}

export default App;
