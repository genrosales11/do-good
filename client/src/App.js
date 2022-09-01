import Header from './Components/Header/Header'
import Home from './Components/pages/Home'
import Category from './Components/pages/Category'
import About  from './Components/pages/About'
import DataHistory from './Components/pages/DataHistory'
import Transportation from './Components/pages/Transportation'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';

function App() {
  // let component
  // switch(window.location.pathname){
  //   case "/":
  //     component = <Home />
  //   break
  //   case "/category":
  //     component = <Category />
  //     break
  //     case "/history":
  //       component = <DataHistory />
  //       break
  //       case "/about":
  //         component = <About />
  //         break
  //         case "/transportation":
  //           component = <Transportation />
  //           break
  // }
  return (
  
    <div className="App">
    <BrowserRouter>
        <Header />
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      <Route path="/category" element={<Category />}>
      </Route>
      <Route path="/history" element={<DataHistory />}>
      </Route>
      <Route path="/about" element={<About/>}>
      </Route>
      <Route path="/transportation" element={<Transportation />}>
      </Route>
    </Routes>
        {/* {component} */}
        </BrowserRouter>
    </div>
  );
}

export default App;