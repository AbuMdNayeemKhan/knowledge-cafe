import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'

function App() {
  const [bookmarks, setBookmarks] = useState(0);

  const handleAddToBookmark = blog => {
    console.log('click on bookmark');
  }
  return (
    <>
      <Header></Header>
      <main className='md:flex'>
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <BookMarks></BookMarks>
      </main>
    </>
  )
}

export default App
