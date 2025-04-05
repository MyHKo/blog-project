import Header from '@components/Header'
import DashBoard from '@components/DashBoard'
import AppRoutes from '@routing/AppRoutes'
import Background from '@components/Background';
import './app.module.scss'

function App() {

  return (<div>
          <Header />
          <DashBoard />
          <Background />
          <AppRoutes />
      </div>
  )
}

export default App
