import './App.css';
import { Header } from './Header';
import { LandingPage } from './LandingPage';
import { Login } from './Login';
import { Signup } from './Signup';
import { Home } from './Home';
import { NotFound } from './NotFound';
import { Modal } from './Modal'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { HireMe } from './HireMe';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react'
import { SocketProvider } from './Home/socket-context';

function App() {
  const [user, setUser] = useState(null);

  function logout() {
    setUser(null)
  }

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} user={user} selectedSession={user?.selectedSession} />
        <div className="App">
          <Header user={user} logout={logout} />
              <Routes>
                  <Route 
                      path="/" 
                      element={user ? <Navigate to="/home" replace /> : <LandingPage />} 
                  />
                  <Route 
                      path="/signup" 
                      element={user ? <Navigate to="/home" replace /> : <Signup />} 
                  />
                  <Route 
                      path="/login" 
                      element={user ? <Navigate to="/home" replace /> : <Login setUser={setUser} />} 
                  />
                    <Route 
                    path="/home" 
                    element={user ? <SocketProvider user={user}><Home user={user} setIsOpen={setIsOpen} /></SocketProvider> : <Navigate to="/" replace />} 
                    />
                  <Route path="/hire-me" element={<HireMe />} />
                  <Route path="*" element={<NotFound />} />
              </Routes>
          <ToastContainer />
      </div>
    </Router>
  );
}

export default App;