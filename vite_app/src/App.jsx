import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import MainBar from './components/MainBar.jsx'
import PlayControls from './components/PlayControls.jsx'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar />
      <MainBar />
      <PlayControls />
    </>
  );
}

export default App;
