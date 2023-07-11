/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"
import { routes } from "./01-lazyload/routers/routes";
import { Suspense } from 'react'
import logo from './logo.svg';

type ActiveClass = string | ((props: {
  isActive: boolean;
  isPending: boolean;
}) => string | undefined)

function App() {

  const activeClass: ActiveClass = ({ isActive }) => isActive ? "nav-active" : "" 

  return (
    <Suspense fallback={<p>Cargando...</p>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>
                {
                routes.map( route => (
                  <li key={route.path}>
                    <NavLink 
                      to={route.path!}
                      className={activeClass}> {route.path} </NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          <div className="router-container">
            <Routes>
              {
                routes.map( route => (
                  <Route 
                    key={route.path}
                    path={route.path} 
                    Component={route.Component} 
                  />
                ))
              }
              <Route path="/*" element={<h1>404</h1>} />
            </Routes>
          </div>

        </div>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
