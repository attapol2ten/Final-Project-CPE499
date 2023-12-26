import { NavLink } from 'react-router-dom'
import '../components/Navbar.css'
export const Navbar = () => {
  const ActiveNavbar =({ isActive }) =>{
    return{
      color:isActive ? 'rgb(27, 184, 255)':'rgb(255, 255, 255)'
    }
  }
    return(
        <div className="navBar">
        <div className="navLeft">
          <h1>
            Attapol<span className="spanNavbar">K.</span>
          </h1>
        </div>
          <div className="navCenter">
            <ul className="ulNavbar">
              <li>
                <NavLink style={ActiveNavbar} to='/' className="colorNav1">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink style={ActiveNavbar}  to='/about' className="colorNav2">
               About me
                </NavLink>
              </li>
            </ul>
          </div>
        <div className="navRight">
        <a className="button" href="mailto:autapol0074@gmail.com">Contact me</a>
        </div>
      </div>
   
    )
}
