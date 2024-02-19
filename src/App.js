import { BrowserRouter, Route, Routes} from "react-router-dom"

import Home from './components/Home'
import About from './components/About'
import NotFound from "./components/NotFound";

//import {gsap,Power3} from "gsap"


function App() {

  //let tl = new gsap.timeline();
  //let ease = Power3.easeOut();
   return(
  <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact element={<NotFound/>} />
      </Routes>
 </BrowserRouter>
   );
}

export default App

