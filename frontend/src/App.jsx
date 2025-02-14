import Home from "@pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.module.scss'
import DashBoard from "@components/DashBoard/index.jsx";

function App() {

  return (<>
          <DashBoard />
          <Home />
      </>
  )
}

export default App
