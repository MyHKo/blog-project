import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./pages/Home";
import Header from "@components/Header";
import './app.module.scss'
import SideMenu from "@components/SideMenu/index.jsx";

function App() {

  return (<>
   <Header />
   <SideMenu />
   <Home />
      </>
  )
}

export default App
