import {Route, Routes} from "react-router-dom";
import Awards from "../../pages/Awards/Awards";

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path='/main' element={<div>main</div>} />
                <Route path='/button' element={<div>button</div>} />
                <Route path='/awards' element={<Awards />} />
            </Routes>
        </>
    )
}