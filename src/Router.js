import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Blogs from './pages/Blogs';
import Category from './pages/Category';
import Contact from './pages/Contact';
import Faq from './pages/FAQ';
import Home from './pages/Home';
import Item from './pages/Item';
import SingleBlog from './pages/SingleBlog';
const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/category' element={<Category />}/>
      <Route path='/item' element={<Item />}/>
      <Route path='/faq' element={<Faq />}/>
      <Route path='/blog' element={<Blogs />} />
      <Route path='/blog/:name' element={<SingleBlog />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </BrowserRouter>
)

export default Router;