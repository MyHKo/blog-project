import Home from "@pages/Home";
import Header from "@components/Header";
import DashBoard from "@components/DashBoard";
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
