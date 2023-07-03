import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import MessOff from './components/MessOff';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/messoff" element={<MessOff />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App
