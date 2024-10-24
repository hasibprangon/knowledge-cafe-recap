import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmark/Bookmarks'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <main className='md:flex container mx-auto mt-3'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>

    </>
  )
}

export default App
