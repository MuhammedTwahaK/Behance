import logo from './logo.svg';
import './App.css';
import './HeadOne.css';
import './ImgOne.css';
import './SideLeft.css';
import './BottomNav.css';
import HeadOne from './Component/HeadOne';
import ImgOne from './Component/ImgOne';
import SideLeft from './Component/SideLeft';
import BottomNav from './Component/BottomNav';

function App() {
  return (
    <div>
      <HeadOne/>
      <ImgOne/>
      <SideLeft/>
      <BottomNav/>
    </div>
  );
}

export default App;
