// App.tsx
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';
import UseState from './pages/useState';
import UseEffectHook from './pages/useEffectHook';
import Home from './pages/home';
import UseContextExample, { ThemeProvider } from './pages/useContext';
import UseRefExample from './pages/useRef';
import UseReducerExample from './pages/useReducer';
import Footer from './components/footer';
import './App.css';

const App = () => {
  return (
    <div className="main-content">
      <BrowserRouter>
        <ThemeProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/useState" element={<UseState />} />
            <Route path="/useEffect" element={<UseEffectHook />} />
            <Route path="/useContext" element={<UseContextExample />} />
            <Route path="/useRef" element={<UseRefExample />} />
            <Route path="/useReducer" element={<UseReducerExample />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
