import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import WhiteBoard from "./WhiteBoard"
import {Link} from 'react-router-dom'

const NavBar = () =>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">


      <a className="navbar-brand"
         href="/course-editor/course-editor.template.client.html">

        Course Manager
      </a>


      <Link to="/courseTable">
        <button type="button" className="btn btn-outline-light">
          TV
        </button>

      </Link>

      <Link to="/courseGrid">
        <button type="button" className="btn btn-outline-light">
          GV
        </button>

      </Link>


    </nav>

export default NavBar
