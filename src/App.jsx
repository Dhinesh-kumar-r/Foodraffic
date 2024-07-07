import { Routes, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './component/Navbar/Navbar';
import { Home } from './pages/Home/Home';
import { ModalProvider } from './Context/Context';

function App() {
  return (
    <ModalProvider>
    <div className="app">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
       </Routes>
    </div>
    </ModalProvider>

  );
}

export default App;
