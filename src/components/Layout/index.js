import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'
import './index.scss'

function Layout(){
  return(
    <div className="App">
      <Sidebar />
      <div className='page'>
        <Outlet />
      </div>
        
        
    </div>
  )
}
export default Layout