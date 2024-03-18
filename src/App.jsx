import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <main className='md:flex'>
      <Blogs></Blogs>
      <BookMarks></BookMarks>
      </main>
    </>
  )
}

export default App
