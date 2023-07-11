import { NavLink, Navigate, Route, Routes } from "react-router-dom"

export const LazyPage1 = () => {
    return (
        <div>
            <h1>
                LazyPage1
            </h1>

            <ul>
                <li>
                    <NavLink to={"sublazy1"}> SubLazy1 </NavLink>
                </li>
                <li>
                    <NavLink to={"sublazy2"}> SubLazy2 </NavLink>
                </li>
            </ul>

            <Routes>
                <Route path="sublazy1" element={<h1>Sublazy 1</h1>} />
                <Route path="sublazy2" element={<h1>Sublazy 2</h1>} />
                <Route path="*" element={<Navigate replace to="sublazy1" />} />
            </Routes>
            
        </div>
    )
}

export default LazyPage1