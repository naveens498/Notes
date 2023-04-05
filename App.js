import { BrowserRouter , Routes, Route} from 'react-router-dom';
import './App.css';
import Div1 from './component/file1';
import Div2 from './component/file2';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Div1/>}/>
    <Route path='/web' element={<Div2/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
