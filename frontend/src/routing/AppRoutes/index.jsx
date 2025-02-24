import {Route, Routes} from 'react-router-dom'
import Home from '@pages/Home'
import routes from '@routing/path.js'

function AppRoutes() {
    return (
        <Routes>
            <Route path={routes.home} element={<Home />} />
        </Routes>
    )
}

export default AppRoutes;
