import './App.css';
//Router call
import {
  BrowserRouter as Router,Switch,Route,Redirect, Routes,
} from "react-router-dom";
//Components call
import Home from "./component/home"
import Register from './component/register';
import Login from './component/login';
import Allcategories from './component/Allcategories';
import Fruits  from './component/fruit';
import Vegetable from './component/vegetable';
import Accessories from './component/accessories';
import DryFruits from './component/dryfruits';
import Cookies from './component/freshcookies'
import Juice from './component/juices'
import Scrolltotop from './component/scrolltotop';
import Aboutus from './component/Aboutus';
function App() {
  return (
    <>
      <Router>
        <Scrolltotop/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Allcategories" element={<Allcategories/>} />
          <Route path="/Vegetable" element={<Vegetable/>} />
          <Route path="/Fruits" element={<Fruits/>} />
          <Route path="/accessories" element={<Accessories/>} />
          <Route path="/dryfruit" element={<DryFruits/>} />
          <Route path="/juice" element={<Juice/>} />
          <Route path="/cookies" element={<Cookies/>} />
          <Route path="/Aboutus" element={<Aboutus/>} />
        </Routes>
      </Router>   
    </>
  );
}
export default App;