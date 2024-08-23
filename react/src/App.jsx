import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from "./components/Post.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Post />
    </>
  )
}

export default App
