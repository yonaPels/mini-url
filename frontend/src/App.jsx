import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ShortenUrl } from './cmps/shorten-URL';
import { RedirectsPage } from './cmps/redirects-page';
import { DisplayURLs } from './cmps/display-URLs';
import { AppHeader } from './cmps/app-header';

function App() {
  return (
    <section className="App">
     <AppHeader/>
      <main>
        <Routes>
          <Route path="/" element={<ShortenUrl/>} />
          <Route path="/preview" element={<DisplayURLs />} />
          <Route path="/:url" element={<RedirectsPage />} />
        </Routes>
      </main>
    </section>
  )
}

export default App;
