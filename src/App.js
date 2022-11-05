import './App.css';
import { BrowserRouter, Routes , Route } from "react-router-dom"
import { Contact } from './pages/contact';
import { Profile } from './pages/profile';



function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/"  element={<Profile />} />
            <Route path="/contact"  element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
