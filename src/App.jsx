import { BrowserRouter, Route, Routes } from 'react-router-dom'


import HomePage from './pages/homepage';
import ChiSiamo from './pages/chisiamo';
import ListaPost from './pages/listapost';
import DefaultLayout from './layouts/DefaultLayout';
import SinglePost from './pages/SinglePost';

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />

          <Route path="/post">
            <Route index element={<ListaPost />} />
            <Route path='/post/:id' element={<SinglePost />} />
          </Route>
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App
