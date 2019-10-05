import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

const CourseEditor = () =>

    <div>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <button type="button" onClick="window.location.href='/'"
              className="close btn-dark"
              aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>

      <a className="navbar-brand"
         href="/course-editor/course-editor.template.client.html">

        CS5550 Software Engineering Graduate

      </a>


      <div className="collapse navbar-collapse" id="addCollapse">

        <a className="nav-item nav-link text-white" href="#">Build</a>
        <a className="nav-item nav-link active text-white wbdv-page-tab"
           href="#">Pages</a>
        <a className="nav-item nav-link text-white" href="#">Theme</a>
        <a className="nav-item nav-link text-white" href="#">Store</a>
        <a className="nav-item nav-link text-white" href="#">Apps</a>
        <a className="nav-item nav-link text-white" href="#">Settings</a>

        <button className="btn btn-outline-danger wbdv-new-page-btn"
                type="submit"><i
            className="fas fa-plus-circle wbdv-button wbdv-add-course"></i>
        </button>


      </div>


      <button className="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#addCollapse" aria-controls="addCollapse"
              aria-expanded="false">
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>

    <div className="row">
    <div className="col-4">
    <h2>Modules</h2>asda
</div>
<div className="col-8">
<h2>Lessons</h2>fdsfs
</div>
</div>

</div>



export default CourseEditor