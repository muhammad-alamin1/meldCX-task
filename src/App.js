import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Devices from './Components/Devices/Devices';
import Login from './Components/Login/Login';

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/device" element={<Devices />} />
      </Routes>
    </Router>
  );
}

export default App;
