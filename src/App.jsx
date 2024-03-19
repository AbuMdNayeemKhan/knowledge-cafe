import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  return (
    <>
      <Header></Header>
      <main className='md:flex'>
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <BookMarks bookmarks={bookmarks}></BookMarks>
      </main>
    </>
  )
}

export default App
