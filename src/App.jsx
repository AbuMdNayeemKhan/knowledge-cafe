import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handlesetReadingTime = (time) => {
    const newReadingTime = (readingTime + time);
    setReadingTime(newReadingTime);
  }

  return (
    <>
      <Header></Header>
      <main className='md:flex'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handlesetReadingTime={handlesetReadingTime}></Blogs>
      <BookMarks bookmarks={bookmarks} readingTime={readingTime}></BookMarks>
      </main>
    </>
  )
}

export default App
