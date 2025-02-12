import Home from "@pages/Home";
import Header from "@components/Header";
import SideMenu from "@components/SideMenu";
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.module.scss'

function App() {

  return (<>
   <Header />
   <SideMenu />
   <Home />
      </>
  )
}

export default App
