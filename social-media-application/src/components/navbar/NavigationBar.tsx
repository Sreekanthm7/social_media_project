import { RoutPath } from '../../routes/mainRoutes'
import './NavigationBar.css'
import { NavLink } from 'react-router-dom'

export function NavigationBar() {

   return (
      <div className="navigation-main">
         <div className="nav-bar">
            <div className="title">
               <span>SO</span><p>CIAL</p><a className='com'> .com</a>
            </div>
            <div className="navigation-links">
               <NavLink className={'common-link'} to={RoutPath.home} style={({ isActive }) => ({
                  background: isActive ? '#e8f1fe' : '#fff',
                  color: isActive ? '#1877f2' : '#000',
                  fontWeight: isActive ? '600' : '400',
                  border: isActive ? 'none' : '1px solid #e8f1fe'
               })}
               >
                  <div className={'common-link'}>Home</div>
               </NavLink>
               <NavLink className={'common-link'} to={RoutPath.usersPage} style={({ isActive }) => ({
                  background: isActive ? '#e8f1fe' : '#fff',
                  color: isActive ? '#1877f2' : '#000',
                  fontWeight: isActive ? '600' : '400',
                  border: isActive ? 'none' : '1px solid #e8f1fe'
               })}>
                  <div className={'common-link'}>
                     Users
                  </div>
               </NavLink>
               <NavLink className={'common-link'} to={RoutPath.aboutPage} style={({ isActive }) => ({
                  background: isActive ? '#e8f1fe' : '#fff',
                  color: isActive ? '#1877f2' : '#000',
                  fontWeight: isActive ? '600' : '400',
                  border: isActive ? 'none' : '1px solid #e8f1fe'
               })}>
                  <div className={'common-link'}>
                     <button>
                        <i className="fa-solid fa-info"></i>
                     </button>
                     About
                  </div>
               </NavLink>
            </div>
         </div>
      </div>
   )
}
// 51