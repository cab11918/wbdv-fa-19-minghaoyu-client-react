import React from 'react'
import CourseRow from "../components/CourseRow";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faTh,
  faSortAlphaDown,
  faList,
  faCaretDown
} from '@fortawesome/free-solid-svg-icons'
import CourseServices from "../services/CourseService"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import CourseCard from "../components/CourseCard"
import CourseTable from "./CourseTable";
import {Link} from 'react-router-dom'
import NavBar from "../components/NavBar";
import CourseService from "../services/CourseService"


class CourseGrid extends React.Component {

  constructor(props) {
    super(props);
    this.CourseService = CourseService.getInstance()
    this.state = {
      courses: this.CourseService.findAllCourses()
    }

  }

  handleDelete = id => {

    this.CourseService.deleteCourse(id)
    this.setState({courses: this.CourseService.courses});
  };


  render() {
    return (
        <div>
          <NavBar/>

          <Route path="/courseTable" component={CourseTable}/>

          <table className="table">
            <thead className="thead-dark">
            <tr>
              <th>
                Recent documents
              </th>

              <th>
                Owned by me
                &nbsp;
                <FontAwesomeIcon icon={faCaretDown}/>

              </th>


              <th>

                <button className={"btn btn-outline-light float-right"}>

                  <FontAwesomeIcon icon={faSortAlphaDown}/>

                </button>

                <Link to="/courseTable">

                  <button className={"btn btn-outline-light float-right"}>

                    <FontAwesomeIcon icon={faList}/>

                  </button>

                </Link>


              </th>
            </tr>
            </thead>
          </table>


                <CourseCard
                    courses={this.state.courses}
                    handleDelete={this.handleDelete}
                />




        </div>
    )
  }
}

export default CourseGrid