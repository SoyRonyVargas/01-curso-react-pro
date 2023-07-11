import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"
import logo from './logo.svg';

type ActiveClass = string | ((props: {
  isActive: boolean;
  isPending: boolean;
}) => string | undefined)

function App() {

  const activeClass: ActiveClass = ({ isActive }) => isActive ? "nav-active" : "" 

  return (
    <BrowserRouter>
       <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink 
                to="/" 
                className={activeClass}>Home</NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={activeClass}>About</NavLink>
            </li>
            <li>
              <NavLink 
                to="/users" 
                className={activeClass}>Users</NavLink>
              </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h1>Hola</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/*" element={<h1>404</h1>} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App
