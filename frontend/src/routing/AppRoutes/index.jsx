import {Route, Routes} from 'react-router-dom'
import Home from '@pages/Home'
import About from '@pages/About';
import Editor from "@pages/Editor";
import routes from '@routing/path.js'

function AppRoutes() {
    return (
        <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.about} element={<About />} />
            <Route path={routes.editor} element={<Editor/>} />
        </Routes>
    )
}

export default AppRoutes;
