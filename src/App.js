import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Item from './pages/Item';
import Join from './pages/Join';
import Login from './pages/Login';
import Signup3 from './pages/Signup3';
import Signup2 from './pages/Signup2';
import Signup1 from './pages/Signup1'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/item" element={<Item />} />
      <Route path="/join" element={<Join />} />
      <Route path="/login" element={<Login />} />
      <Route path='/signup3' element={<Signup3 />}/>
      <Route path="/signup2" element={<Signup2 />} />
      <Route path='/signup1' element={<Signup1 />} />
    </Routes>
  );
}

export default App;
