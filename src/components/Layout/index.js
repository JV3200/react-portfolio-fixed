import { Outlet } from 'react-router-dom'
import './index.scss'
import Sidebar from '../Sidebar'

const Layout = () => {
  return (
    <div>
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">
          <br />
          &lt;body&gt;
        </span>

        <Outlet />

        <span className="tags bottom-tags">
          <br />
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
