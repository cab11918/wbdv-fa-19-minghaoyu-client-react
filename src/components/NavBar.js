import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import WhiteBoard from "./WhiteBoard"
import {Link} from 'react-router-dom'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faTh,
  faSortAlphaDown,
  faList,
  faCaretDown,
  faBook
} from '@fortawesome/free-solid-svg-icons'
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons/faPlusCircle";

const NavBar = () =>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>


      <a className="navbar-brand"
         href="/course-editor/course-editor.template.client.html">

        Course Manager
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">


      <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-12" type="search"
                 placeholder="New Course Title" aria-label="Search">

          </input>
          <button className="btn btn-outline-danger my-2 my-sm-0"
                  type="submit">

            <FontAwesomeIcon icon={faPlusCircle}/>
          </button>
        </form>


      </div>






    </nav>





export default NavBar
