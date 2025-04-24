import { BrowserRouter, Route, Routes } from 'react-router-dom'


import HomePage from './pages/homepage';
import ChiSiamo from './pages/chisiamo';
import PostsList from './components/PostsList';
import DefaultLayout from './layouts/DefaultLayout';
import SinglePost from './pages/SinglePost';
import { PostsProvider } from './context/GlobalContext';


function App() {

  return (
    <PostsProvider>
      <BrowserRouter>

        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />

            <Route path="/post">
              <Route index element={<PostsList />} />
              <Route path='/post/:id' element={<SinglePost />} />
            </Route>
          </Route>
        </Routes>

      </BrowserRouter>
    </PostsProvider>
  );
}

export default App
