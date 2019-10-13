import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faTh,
  faSortAlphaDown,
  faList,
  faCaretDown
} from '@fortawesome/free-solid-svg-icons'
import {Route} from 'react-router-dom';

import CourseCard from "../components/CourseCard"
import CourseTable from "./CourseTable";
import {Link} from 'react-router-dom'
import CourseService from "../services/CourseService"
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons/faPlusCircle";

class CourseGrid extends React.Component {

  constructor(props) {
    super(props);
    this.CourseService = CourseService.getInstance()
    this.state = {
      course: {
        title: "New Course Title"
      },
      courses: this.CourseService.findAllCourses(),
    }

  }

  newCourseChanged = (event) =>
      this.setState({
        course: {
          title: event.target.value
        }
      })

  handleDelete = id => {

    this.CourseService.deleteCourse(id)
    this.setState({courses: this.CourseService.courses});
  };

  createCourse = () => {
    this.setState(prevState => {
      const course = {
        title: prevState.course.title,
        id: (new Date().getTime()),
      };
      this.CourseService.createCourse(course)
      this.setState({courses: this.CourseService.courses});

    })

    return {
      courses: this.CourseService.findAllCourses()
    }

  };

  render() {
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>


            <a className="navbar-brand"
               href="">

              Course Manager
            </a>
            <div className="collapse navbar-collapse"
                 id="navbarSupportedContent">


              <div className="row">
                <input
                    onChange={this.newCourseChanged}
                    className="form-control col-5"
                    placeholder={this.state.course.title} aria-label="Search">

                </input>
                <button onClick={this.createCourse} className="btn btn-success">

                  <FontAwesomeIcon icon={faPlusCircle}/>
                </button>


              </div>


            </div>


          </nav>

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