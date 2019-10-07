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
  faBook, faTimesCircle, faPlusSquare
} from '@fortawesome/free-solid-svg-icons'
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons/faPlusCircle";

class LessonTabs extends React.Component {
  render() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

          <Link to="/courseTable">
            <button className={"btn btn-outline-light float-right"}>

              <FontAwesomeIcon icon={faTimesCircle}/>

            </button>

          </Link>
          <a className="navbar-brand" href="#">CS5550 Software Engineering
            Graduate
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
                <a className="nav-link" href="#">Build <span
                    className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pages <span
                    className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Theme <span
                    className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Store <span
                    className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Apps <span
                    className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Settings <span
                    className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">


                <span
                    className="sr-only">(current)</span></a>
              </li>

              <li className="nav-item">
                <a>

                  <input className="form-control mr-sm-12" type="search"
                         placeholder="New Lesson" aria-label="Search">

                  </input>
                </a>
              </li>


              <button className="btn btn-outline-light float-right">

                <FontAwesomeIcon icon={faPlusSquare}/>

              </button>


            </ul>

          </div>

        </nav>

    )
  }
}

export default LessonTabs
