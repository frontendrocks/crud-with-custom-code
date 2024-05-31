import { Routes, Route, BrowserRouter} from "react-router-dom";
import './App.css';
import Add from './components/posts/Add';
import List from './components/posts/List';
import Update from './components/posts/Update';
import NoPage from './components/posts/NoPage';


function App() {
  return (
    <div className="container">
      <div className="row mt-4">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<List />} />
            <Route path="add"  element={<Add />} />
            <Route path="update" element={<Update />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      </div>
 
    </div>
  );
}

export default App;
