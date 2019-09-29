import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () =>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">


      <a className="navbar-brand"
         href="/course-editor/course-editor.template.client.html">

        Course Manager
      </a>


      <button className="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#addCollapse" aria-controls="addCollapse"
              aria-expanded="false">
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>

export default NavBar