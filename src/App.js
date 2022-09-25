import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Landing from './components/Landing';
import CreateEvent from './components/CreateEvent';
import Event from "./components/Event";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="create" element={<CreateEvent />} />
      <Route path="event" element={<Event/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
