import logo from './logo.svg';
import './App.css';
import {HashRouter,Route,Routes,Outlet} from 'react-router-dom';
import Home from './component/home';
import About from './component/about'
import Skills from './component/skills'
import Services from './component/services'
import Contact from './component/contact'
import Sidenav from './component/sidenav';
import ThemeChanger from './component/themeChanger';
import SectionHead from './HOC_Component/sectionHead';
function App() {
  return (
    <HashRouter>
    <div className="App">
      <div className='appSub'>
        <Sidenav />
        <ThemeChanger />
      <div className='main-content'>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About phead={<SectionHead pH='About Us'/>}/>} />
          <Route path="/skills" element={<Skills phead={<SectionHead pH='My Skiils'/>}/>} />
          <Route path='/services' element={<Services phead={<SectionHead pH='Services' />} />} />
          <Route path='/contact' element={<Contact phead={<SectionHead pH='Contect Us'/>}/>} />
        </Routes>
      <Outlet />
      </div>
      </div>
    </div>
    </HashRouter>
  );
}

export default App;
