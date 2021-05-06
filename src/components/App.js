import { useState, useEffect } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import RecommendedVideos from './RecommendedVideos';
import '../css/App.css';

export default function App() {
  const [isSideBar, setSideBar] = useState(true);
  const [isWidth, setWidth] = useState(window.innerWidth <= 768);
  const updateBar = () => {
    if (window.innerWidth <= 768 && window.innerWidth > 492) {
      setSideBar(false);
    }
    else
      setSideBar(true);

    if (window.innerWidth <= 768)
      setWidth(true);
    else
      setWidth(false);
  }
  useEffect(() => {

    window.addEventListener('resize', updateBar);
    return () => window.removeEventListener('resize', updateBar);
  }, []);

  return (
    <div className="App">
      <Header state={isSideBar} toggle={setSideBar} />
      <div className="App-Main" >
        <SideBar state={isSideBar} />
        <div className="App-Main-Videos" id="App-Main-Videos"
          style={isWidth ? (isSideBar ? { marginLeft: '0px' } : { marginLeft: '80px' }) : (isSideBar ? { marginLeft: '250px' } : { marginLeft: '80px' })}>
          <RecommendedVideos />
        </div>
      </div>
    </div>
  );
}

