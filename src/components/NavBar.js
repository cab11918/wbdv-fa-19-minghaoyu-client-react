import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons'

const NavBar = ({course,module}) =>


        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

          <Link to="/courseTable">
            <button className={"btn btn-outline-light float-right"}>

              <FontAwesomeIcon icon={faTimesCircle}/>

            </button>

          </Link>
          <a className="navbar-brand" href="#">
            {course.title}
          </a>
          <button className="navbar-toggler" type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">




              <li className="nav-item">
                <a className="nav-link" href="#"><span
                    className="sr-only">(current)</span></a>
              </li>










            </ul>

          </div>

        </nav>



export default NavBar
