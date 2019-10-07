import React from 'react'
import CourseRow from "../components/CourseRow";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTh, faSortAlphaDown} from '@fortawesome/free-solid-svg-icons'
import CourseServices from "../services/CourseService"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CourseGrid from "./CourseGrid";
import CourseEditor from "./CourseEditor";
import WhiteBoard from "../components/WhiteBoard"
import {Link} from 'react-router-dom'
import NavBar from "../components/NavBar";
import CourseService from "../services/CourseService"

class CourseTable extends React.Component {

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

          <Route path="/courseGrid" component={CourseGrid}/>

          <table className="table">
            <thead className="thead-dark">
            <tr>
              <th>
                Title
              </th>
              <th>
                Owned by
              </th>
              <th>
                Last modified by me
              </th>

              <th>


                <button className={"btn btn-outline-light float-right"}>

                  <FontAwesomeIcon icon={faSortAlphaDown}/>

                </button>


                <Link to="/courseGrid">


                  <button className={"btn btn-outline-light float-right"}>

                    <FontAwesomeIcon icon={faTh}/>

                  </button>

                </Link>


              </th>
            </tr>
            </thead>


            <CourseRow
                courses={this.state.courses}
                handleDelete={this.handleDelete}

            />


          </table>
        </div>

    )
  }
}

export default CourseTable

