import { Route, Routes } from 'react-router-dom';
import Index from './components/Index';
import Item from './components/Item';
import Join from './components/Join';
import Login from './components/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/item" element={<Item />} />
      <Route path="/join" element={<Join />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
