import Home from "@pages/Home";
import Header from "@components/Header/index.jsx";
import DashBoard from "@components/DashBoard/index.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.module.scss'

function App() {

  return (<>
          <Header />
          <DashBoard />
          <Home />
      </>
  )
}

export default App
