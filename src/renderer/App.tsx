import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function Main() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-dvh bg-zinc-800 text-white p-4 gap-3">
      <div className="w-full">
        <h1 className="text-xl text-zinc-400">Basic thing that shows up</h1>
        <p className="text-md text-zinc-500">when you click cmd+x!</p>
      </div>

      <input
        autoFocus
        className="border-none rounded-lg h-[40px] w-full text-black px-4 text-lg"
      />

      <button className="bg-blue-500 h-[40px] px-4 rounded-lg flex items-center justify-center self-end">
        Save
      </button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}
