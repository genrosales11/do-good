import Header from './Components/Header/Header'
import Home from './Components/pages/Home'
import Category from './Components/pages/Category'
import About  from './Components/pages/About'
import DataHistory from './Components/pages/DataHistory'
import Transportation from './Components/pages/Transportation'

import './App.css';

function App() {
  let component
  switch(window.location.pathname){
    case "/":
      component = <Home />
    break
    case "/category":
      component = <Category />
      break
      case "/history":
        component = <DataHistory />
        break
        case "/about":
          component = <About />
          break
          case "/transportation":
            component = <Transportation />
            break
  }
  return (
  
    <div className="App">
        <Header />
        {component}
    </div>
  );
}

export default App;