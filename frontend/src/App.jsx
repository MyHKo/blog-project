import Header from '@components/Header'
import DashBoard from '@components/DashBoard'
import AppRoutes from '@routing/AppRoutes'
import './app.module.scss'

function App() {

  return (<div>
          <Header />
          <DashBoard />
          <AppRoutes />
      </div>
  )
}

export default App
